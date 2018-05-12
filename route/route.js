var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
var Queue = require('../models/queue');

router.get('/',controller.index);

router.get('/category',controller.category);


router.get('/category/education',controller.getedu);
router.get('/category/economy',controller.geteco);
router.get('/category/employment',controller.getemp);
router.get('/category/health',controller.gethea);
router.get('/category/tax',controller.gettax);
router.get('/category/safety',controller.getsaf);
router.get('/candidate',controller.getcand);



router.get('/queueol',controller.queueol);
router.get('/users', controller.usersAll);

router.post('/api',controller.createCandidate);
router.get('/api',controller.findAllCandidates);
router.get('/api/:id',controller.findOneCandidate);

router.post('/booth',controller.addbooth);
router.get('/booth',controller.findAllbooths);
router.get('/booth/:id',controller.findOnebooth);
router.get('/category/education',controller.getedu);
router.get('/failed', controller.failed);

router.post('/queueol', controller.enqueue);

module.exports = router;