//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require('lodash');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = {
  title: String,
  content: String,
  tags: String
};

const Post = mongoose.model("Post", postSchema);

app.post("/compose", async function(req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
    tags: req.body.postTags
  });
  await post.save();
  try {
    let blog = post;
    blog = blog.toObject();
    res.send(req.body);
    console.log(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating post");
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving posts");
  }
});


app.get('/posts/:postId', async function(req, res) {
  const requestedPostId = req.params.postId;
  try {
    const post = await Post.findOne({ _id: requestedPostId });
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.render("post", {
      title: post.title,
      content: post.content,
      tags: post.tags
    });
  }  catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving post");
  }
});


app.post("/posts/:postId/delete", async function(req, res) {
  const requestedPostId = req.params.postId;
  try {
    await Post.deleteOne({ _id: requestedPostId });
    console.log(`Post with ID ${requestedPostId} deleted`);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting post");
  }
});


app.listen(4000, function() {
  console.log("Server started on port 4000");
});
