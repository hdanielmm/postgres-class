const { Router } = require('express');
const router = Router();

const { getRestaurants, postRestaurants, postUsers, postBooking, getBookings } = require ('../controllers/index.controllers');

router.get('/restaurants', getRestaurants);
router.post('/restaurants/', postRestaurants);
router.post('/users', postUsers);
router.post('/booking', postBooking);
router.get('/bookings', getBookings);

module.exports = router;