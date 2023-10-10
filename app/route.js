const express = require('express');
const router = express.Router();
const controller = require("./controller/index")

router.get('/', controller.reviews);
router.post('/registrants', controller.registrants);

module.exports = router;