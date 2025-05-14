#!/bin/bash
# Install npm if not present
if ! command -v npm &> /dev/null; then
    echo "npm could not be found. Installing Node.js and npm..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
fi

# Install dependencies
npm install --save-dev jest @babel/core @babel/preset-env babel-jest
npm install --save-dev @types/jest

# Run tests
npm test