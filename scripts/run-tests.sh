#!/bin/bash
set -e

# Navigate to project root
cd "$(dirname "$0")/.."

# Ensure dependencies are installed
npm install

# Run Jest tests with coverage
npx jest --coverage