const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const port = 3001;
const mongoose = require('mongoose');

const app = express();

//Local MongoDB database
const blogDB = "mongodb://localhost:27017/blogDB";

//Connects backend server to database
mongoose.connect(blogDB, {useNewUrlParser: true}, { useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

//Checks if connection is successful
db.on('open', console.error.bind(console, 'MongoDB connection error:'));

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(pino);

// this method fetches all available data in our database
// router.get('/getData', (req, res) => {
//   Data.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });


const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/allposts", function(req, res){
  Post.find({}, function(err, results){
    res.send(results);
  });
});

app.get("/compose", function(req, res){
  Post.find({}, function(err, posts){
    res.send(results);
  });
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});


app.listen(port, () => console.log(`App started on port ${port}!`));