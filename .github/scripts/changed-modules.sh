#!/usr/bin/env bash

# How to test this script, run it with the required environment variables:
# 1. A file from the .github is modified:
#    ALL_CHANGED_FILES=".github/a.txt .github/b/c/d/a.yaml" ./.github/scripts/changed-modules.sh
#    The output should be: all modules.
#
# 2. A file from a module in the modules dir is modified:
#    ALL_CHANGED_FILES="arangodb/go.mod" ./.github/scripts/changed-modules.sh
#    The output should be: just the arangodb module.
#
# 3. A file from two modules in the modules dir are modified:
#    ALL_CHANGED_FILES="arangodb/go.mod redis/go.mod" ./.github/scripts/changed-modules.sh
#    The output should be: the arangodb and redis modules.

# ROOT_DIR is the root directory of the repository.
readonly ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)

# define an array of modules that won't be included in the list
readonly excluded_modules=("mockstorage")

# modules is an array that will store the paths of all the modules in the repository.
modules=()

function is_excluded() {
    for excluded_module in "${excluded_modules[@]}"; do
        if [[ "$1" == "$excluded_module" ]]; then
            return 0
        fi
    done
    return 1
}

# Find all go.mod files in the repository, building a list of all the available modules.
# Do not include the root go.mod file.
while IFS= read -r modFile; do
    module_dir=$(basename "$(dirname "${modFile}")") || continue
    if ! is_excluded "$module_dir"; then
        modules+=("\"$module_dir\"")
    fi
done < <(find "${ROOT_DIR}" -name "go.mod" -not -path "${ROOT_DIR}/go.mod" -not -path "${ROOT_DIR}/**/testdata/*")

# sort modules array
mapfile -t modules < <(printf '%s\n' "${modules[@]}" | sort)

# merge all modules and examples into a single array
allModules=("${modules[@]}")

# sort allModules array
mapfile -t allModules < <(printf '%s\n' "${allModules[@]}" | sort)

# Get the list of modified files, retrieved from the environment variable ALL_CHANGED_FILES.
# On CI, this value will come from a Github Action retrieving the list of modified files from the pull request.
readonly modified_files=("${ALL_CHANGED_FILES[@]}")

# Initialize variables
modified_modules=()

# Check the modified files and determine which modules to build, following these rules:
# - if the modified files only contain files in one of the modules, include that module in the list
# - if the modified files contain any other file, include all modules in the list
for file in $modified_files; do
    if [[ $file == .github/* ]]; then
        modified_modules=("${allModules[@]}")
        break
    fi

    module_name=$(echo $file | cut -d'/' -f1)
    if [[ ! ${modified_modules[@]} =~ ${module_name} ]]; then
        if is_excluded "$module_name"; then
            continue
        fi
        modified_modules+=("\"$module_name\"")
    fi
done

# print all modules with this format:
# each module will be enclosed in double quotes
# each module will be separated by a comma
# the entire list will be enclosed in square brackets
printf '[%s]\n' "$(IFS=,; echo "${modified_modules[*]}")"