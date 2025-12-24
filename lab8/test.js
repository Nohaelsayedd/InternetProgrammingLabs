const express = require('express');
const app = express();
app.use(express.json());

const posts = []; // array to store posts

app.get("/users/:id", (req,res)=>{
    res.json(`User ID is ${req.params.id}`);
});

// Create a post
app.post("/posts", (req, res) => {
    const post = {
        title: req.body["title"],
        content: req.body["content"],
        comments: [] 
    };

    posts.push(post);

    console.log(`New post added: Title="${post.title}"`);
    res.json({
        message: "Received post from you",
        post: post
    });
});

// Read all posts
app.get("/posts", (req, res) => {
    console.log(`Fetching all posts (${posts.length} total)`);
    res.json(posts);
});


// Delete a post
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;

    if(posts[id]) {
        const deletedPost = posts.splice(id, 1)[0];

        console.log(`Post deleted: ID=${id}`);
        res.json({
            message: "Post deleted successfully",
            post: deletedPost
        });
    } else {
        console.log(`Post ID=${id} not found`);
        res.status(404).json({ message: "Post not found" });
    }
});

// Add a comment to a post
app.post("/posts/:id/comments", (req, res) => {
    const id = req.params.id;

    if(posts[id]) {
        const comment = req.body.comment;
        posts[id].comments.push(comment);

        console.log(`Comment added to post ID=${id}: "${comment}"`);
        res.json({
            message: "Comment added successfully",
            post: posts[id]
        });
    } else {
        console.log(`Post ID=${id} not found`);
        res.status(404).json({ message: "Post not found" });
    }
});

// Read post comments
app.get("/posts/:id/comments", (req, res) => {
    const id = req.params.id;

    if(posts[id]) {
        console.log(`Fetching comments for post ID=${id}`);
        res.json({
            postId: id,
            comments: posts[id].comments
        });
    } else {
        console.log(`Post ID=${id} not found`);
        res.status(404).json({ message: "Post not found" });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
