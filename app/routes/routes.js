const controller = require('../controllers/controller');
const router = require('express').Router();

router.get('/version', controller.version);

module.exports = router ;