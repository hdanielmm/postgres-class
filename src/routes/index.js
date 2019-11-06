const { Router } = require('express');
const router = Router();

const { getRestaurants } = require ('../controllers/index.controllers');

router.get('/restaurants', getRestaurants);

module.exports = router;