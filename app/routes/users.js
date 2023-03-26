const controller = require('../controller/users');
const router = require('express').Router();

// CRUD for posts by users
router
    .get('/posts', controller.getAll)
    .get('/posts/:id', controller.getOne)
    .post('/posts', controller.createOne)
    .delete('/posts/:id', controller.deleteOne)
        
