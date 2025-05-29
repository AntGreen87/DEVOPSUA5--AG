#!/bin/bash

# Step 1: Create a new branch
git checkout -b auto-feature-branch

# Step 2: Append a line to hello.txt
echo "Change made by automated script" >> hello.txt

# Step 3: Stage and commit
git add hello.txt
git commit -m "Auto commit from script"

# Step 4: Switch back to main
git checkout main

# Step 5: Merge the feature branch
git merge auto-feature-branch

# Step 6: Push the changes
git push

