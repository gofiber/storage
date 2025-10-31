#!/bin/bash

# Loop over all directories except dot-directories
for dir in */ ; do
  # Skip hidden directories
  [[ "$dir" == .* ]] && continue

  if [ -d "$dir" ]; then
    echo "Processing $dir"
    (
      cd "$dir" || exit

      if [ -f "go.mod" ]; then
        goversion=$(grep '^go ' go.mod | awk '{print $2}')
        if [ -n "$goversion" ]; then
          major=$(echo "$goversion" | cut -d. -f1)
          minor=$(echo "$goversion" | cut -d. -f2)

          # If Go version is >= 1.23
          if [ "$major" -gt 1 ] || { [ "$major" -eq 1 ] && [ "$minor" -ge 23 ]; }; then
            echo "Running go get -u (go.mod version: $goversion)"
            GOTOOLCHAIN=local go get -u
          else
            echo "Skipping go get -u (go.mod version: $goversion < 1.23)"
          fi
        fi
      fi

      GOTOOLCHAIN=local go mod tidy
    )
  fi
done

