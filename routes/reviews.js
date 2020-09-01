const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/games/:id/reviews', reviewsCtrl.create);
router.delete('/games/:id', reviewsCtrl.delete);

module.exports = router;