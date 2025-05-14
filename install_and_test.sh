#!/bin/bash
set -e

# Ensure npm is available
if ! command -v npm &> /dev/null; then
    echo "npm could not be found. Please install Node.js and npm."
    exit 1
fi

# Initialize npm project if not already done
if [ ! -f "package-lock.json" ]; then
    npm init -y
fi

# Install Jest and dependencies
npm install --save-dev jest

# Run tests
npm test