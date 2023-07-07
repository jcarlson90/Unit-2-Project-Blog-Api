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
-To start off, run this command npm run dev. Which will be running on http://localhost:3000
-In your terminal you should be able to see "We really doing it 3000" which shows the app is connected, and "Mongo be workin" to state that the MONGODB database is connected.

Api Requests in Postman:
-Open postman app and make sure that your server is running still on http://localhost:3000.
-Start with a post request to be able to create a user and set the Body tab to raw and JSON.
-Enter the the request based on the endpoints shown within the routes folders.
-When viewing the routes, make sure to pay attention to which ones need authorization via webtoken.
-The required information should be written in JSON object format.
-If everything loks good, click send.
(To make using postman a little easier, I decided to make a collection for the routes that I wanted to test, to save having to type out everything for every request when presenting my project.)

Testing with Jest & Supertest:
-Make sure that your app is not running now by hitting pkill node
-To test the userRoute, execute the following command; npm run testUser
-To test the postRoute, execute the following command; npm run testPost
-To test both, run npm run test.

Testing with Artillery:
-To run a test with artillery, run the following command; npm run dev:load

Trello:
https://trello.com/invite/b/rgmQOKs2/ATTIed5135bd4cdc74209eca838a434556c8AFD6CDAB/blog-api-project



