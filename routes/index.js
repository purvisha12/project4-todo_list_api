var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller');

router.post('/insert',user.insert);
router.get('/',user.select_data);

router.get('/delete/:id',user.delete_data);
router.post('/update/:id',user.update_data);
router.get('/update/:id',user.update_data);

router.get('/run/:id',user.run);
router.get('/run',user.running);

router.get('/pending/:id',user.pend);
router.get('/pending',user.pending);

router.get('/decline/:id',user.decline);
router.get('/decline',user.declining);

router.get('/complate/:id',user.complate);
router.get('/complate',user.complated);

module.exports = router;
