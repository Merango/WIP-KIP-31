#!/bin/bash
set -e

# Ensure we're in the project root
cd "$(dirname "$0")/.."

# Install Node.js and npm if not exist (customize for your environment)
# Example for Ubuntu/Debian:
# sudo apt-get update
# sudo apt-get install -y nodejs npm

# Install project dependencies
npm install

# Install Jest and TypeScript
npm install --save-dev jest ts-jest @types/jest typescript

# Make test scripts executable
chmod +x scripts/run-tests.sh