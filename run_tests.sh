#!/bin/bash
set -e

# Ensure dependencies are installed
npm install

# Run tests
npx jest tests