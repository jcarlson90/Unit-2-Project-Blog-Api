Jake's Blog Api Project

Project Purpose

The purpose of this api is to create users that can then be logged in, logged out, updated, and deleted. these users can also create a blog post with a title and post body. The posts can be created, retrieved, and also deleted.

Prerequisites:
-Node.js
-MongoDb Atlas Database
-Nodemon (optional)
Open terminal and run npm install -g nodemon

Starting:
-Clone this repository to your computer
-Install the needed dependencies by running npm i
(node.js must be installed to run that)
-touch .env file in the root directory
-To keep data hidden when pushing to GITHUB, add nodemodules/ & .env into the .gitignore file
-In .env, create a variable for the MONGODB connection string as well as a variable for SECRET with a hashed SHA password.

Blog Api:
-To start off, run this command