const controller = require('../controller/users');
const router = require('express').Router();

// CRUD for posts by users
router
    .get('/posts', controller.getAll) // all posts by all the users
    .get('users/:id/posts/:id', controller.getOne) // specific post by a specific user
    .get('/users/:id/posts', controller.getAll) // get all posts by a user
    .post('/users/:id/posts', controller.createOne)
    .patch('/users/:id/posts/:id', controller.patch)
    .delete('/users/:id/posts/:id', controller.deleteOne)
    .delete('/users/:id/posts', controller.delete) // delete all posts by a user 

