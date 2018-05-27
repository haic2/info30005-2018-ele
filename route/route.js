var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
var Queue = require('../models/queue');

router.get('/',controller.index);
router.post('/', controller.query);
router.get('/category',controller.category);
router.get('/station',controller.getbooth);


router.get('/category/education',controller.getedu);
router.get('/category/economy',controller.geteco);
router.get('/category/employment',controller.getemp);
router.get('/category/health',controller.gethea);
router.get('/category/tax',controller.gettax);
router.get('/category/safety',controller.getsaf);
router.get('/candidate',controller.getcand);



router.get('/queueol',controller.queueol);
router.get('/users', controller.usersAll);


router.get('/category/education',controller.getedu);
router.get('/failed', controller.failed);

router.post('/queueol', controller.enqueue);

module.exports = router;