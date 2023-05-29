const express = require('express');
const router = express.Router();
const testController = require('../../../controllers/api/v1/test');

router.get('/', testController.getAll);
router.post('/', testController.create);



module.exports = router;