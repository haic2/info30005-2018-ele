const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
router.get('/',controller.index);
router.get('/users',controller.usersAll);
router.get('/users/:id',controller.fetch);

module.exports = router;