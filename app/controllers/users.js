const Posts = require('../models/models/Posts');

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Posts.findAll();
        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json(err);
    }
}