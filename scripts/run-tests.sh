#!/bin/bash
# Ensure we're in the project root
cd "$(dirname "$0")/.."

# Install dependencies
yarn install

# Run tests with coverage
yarn test