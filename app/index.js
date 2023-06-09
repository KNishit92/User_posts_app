const express = require("express")

const sequelize = require('./utils/database');
const User = require('./models/models');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    next();
})

app.use('/routes', require('./routes/routes'));
app.use('/users', require('./routes/users'))

// create table before touching the end points
(async () => {
    try {
        await sequelize.sync(
            { force: true }
        );
        app.listen(process.env.EXTERNAL_PORT || 3000);
    } catch (err) {
        console.log("Error starting server: " + err.message);
    }
})()
