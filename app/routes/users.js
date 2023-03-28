const controller = require('../controller/users');
const router = require('express').Router();

// CRUD for posts by users
router
    // .post('/users', controller.createUser) // create a new user
    .get('/posts', controller.getAllPosts) // all posts by all the users
    // .get('users/:id/posts/:id', controller.getPost) // specific post by a specific user
    // .get('/users/:id/posts', controller.getAllPosts) // get all posts by a user
    // .post('/users/:id/posts', controller.createPost)
    // .patch('/users/:id/posts/:id', controller.updatePost)
    // .delete('/users/:id/posts/:id', controller.deletePost)
    // .delete('/users/:id/posts', controller.deleteAllPostsByUser) // delete all posts by a user 

