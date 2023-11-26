const express = require('express');
const upload = require('../../multer.config');

const outerController = require('./outerController');

const router = express.Router();

const outer = new outerController;

router.get('/get', outer.getResponse);
router.post('/post',upload.single('image'), outer.PostResponse)

module.exports = router;