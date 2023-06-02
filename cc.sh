#!/bin/bash

# Create component script
# This script will create 2 starter files, Component + Styling in the current directory
# It takes 1 argument which is the name of the component
# Be careful not to override existing files with this

# Check if the first argument is provided
if [ $# -eq 0 ]; then
  echo "Please provide a name"
  exit 1
fi

# Get the first argument
file_name=$1

# Create two files in the current location
touch "$file_name.js"
touch "s$file_name.js"

# Write the boilerplate for the first file
echo "import c from './s$file_name';

function $file_name() {}

export default $file_name;" > "$file_name.js"

# Write the boilerplate for the second file
echo "import {StyleSheet} from 'react-native';

export default StyleSheet.create({});" > "s$file_name.js"

echo "Files created successfully"
