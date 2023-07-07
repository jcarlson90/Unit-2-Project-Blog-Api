const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const server = app.listen(8080, () => console.log("Testing on Port 8080"));
const User = require("../models/user");
const Post = require("../models/post");
let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create(); //creating a fake database 
    await mongoose.connect(mongoServer.getUri());
  });
  
  afterEach(async () => {
      await Post.deleteMany() //deletes posts after each test
      await User.deleteMany() //delets user after each test
  });
  
  afterAll(async () => {
    await mongoose.connection.close(); //programmatic ctrl+c
    mongoServer.stop(); //getting rid of our MongoDB instance itself
    server.close(); // stop listening on the port
  });

  describe("Test the post endpoints", () => {
    test("It should create a new post", async () => {
        const user = new User({
            name: "John Doe",
            email: "john.doe@example.com",
            username: "johnnyDoe99",
            password: "password1",
        });
        await user.save();
        const token = await user.generateAuthToken();

        const response = await request(app)
        .post("/posts")
        .set("Authorization", `Bearer ${token}`)
        .send({
         title: "YO",
         postbody: "hey yoyo!"
  
        });
  
      expect(response.statusCode).toBe(200);
      console.log(response.body, "HYTRTGGSTG")
    });

    test("It should get and show all posts", async () => {
        const user = new User({
            name: "Jim Boyle",
            email: "jim@boy.com",
            password: "monkey",
            username: "jimmyB10"
        })
        const post1 = new Post({ // post instance 1
          title: "music",
          postbody: "music if fun to make"
        });
        await post1.save();
    
        const post2 = new Post({
          title: "movies",
          postbody: "movies are fun to watch"
        });
        await post2.save();
    
        const post3 = new Post({
          title: "coding",
          postbody: "coding is hard for me lol"
        });
        await post3.save();
        await user.save();

        const token = await user.generateAuthToken();

        const response = await request(app)
          .get('/posts')
          .set("Authorization", `Bearer ${token}`);
    
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(3);
      });

    test("It should delete a post", async () => {
        const user = new User({
            name: "John Doe",
            email: "john.doe@example.com",
            username: "johnnyDoe99",
            password: "password1",
        });
        const post = new Post({
          title: "gone",
          postbody: "this post was made to be deleted"
        });
        await user.save();
        const token = await user.generateAuthToken();
    
        const response = await request(app)
          .delete(`/posts/${user._id}`)
          .set("Authorization", `Bearer ${token}`);
    
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toEqual("post deleted");
        await post.deleteOne();
      });

    test("It should get a specific post", async () => {
        const user = new User({
            name: "Jim Boyle",
            email: "jim@boy.com",
            password: "monkey",
            username: "jimmyB10"
        })
        const post1 = new Post({ // post instance 1
          title: "music",
          postbody: "music if fun to make"
        });
        await user.save()
        const token = await user.generateAuthToken();

        const response = await request(app)
          .get(`/posts/${user._id}`)
          .set("Authorization", `Bearer ${token}`);
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject;
    });
})
