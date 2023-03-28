const Sequelize = require('sequelize')
const db = require('../utils/database')

const User = db.define('users', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    email: {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    }
});

const Posts = db.define('posts', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    content : {
        type : Sequelize.STRING,
        allowNull : true
    },
    createdAt : {
        type : Sequelize.DATE,
        allowNull : false
    },
    updatedAt : {
        type : Sequelize.DATE,
        allowNull : false
    },
    createdBy: {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    updatedBy: {
        type : Sequelize.INTEGER,
        allowNull : false
    }
})

module.exports = {
    User,
    Posts
}