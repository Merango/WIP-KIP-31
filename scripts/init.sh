#!/bin/bash
# Initialize the project and install dependencies

# Install npm if not exists
if ! command -v npm &> /dev/null; then
    echo "npm could not be found. Installing..."
    # Add appropriate package manager installation for your environment
    # For example, on Ubuntu: sudo apt-get update && sudo apt-get install -y npm
fi

# Install yarn globally
npm install -g yarn

# Install project dependencies
yarn install

# Install Jest globally and locally
npm install -g jest
yarn add -D jest @types/jest ts-jest

# Make test scripts executable
chmod +x scripts/run-tests.sh