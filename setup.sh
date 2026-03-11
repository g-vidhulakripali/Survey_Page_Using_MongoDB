#!/bin/bash

# Create main project folder
mkdir -p survey-app

# Navigate into project folder
cd survey-app || exit

# Create server directory and files
mkdir -p server
touch server/server.js
touch server/db.js
touch server/routes.js

# Create public directory and files
mkdir -p public
touch public/index.html
touch public/survey.js
touch public/style.css

# Create package.json
touch package.json

echo "Survey app project structure created successfully!"