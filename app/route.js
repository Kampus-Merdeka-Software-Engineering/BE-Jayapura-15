const express = require('express');
const router = express.Router();
const controller = require("./controller/index")

router.get('/reviews', controller.reviews);
router.post('/registrants', controller.registrants);

module.exports = router;