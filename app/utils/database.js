// to establish a connection with the database

const Sequelize = require('sequelize');

const sequelize = New Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect:'postgres'
    }
);

module.exports = sequelize;