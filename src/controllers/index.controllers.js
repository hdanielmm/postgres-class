const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reservas',
  password: '',
  port: 5432,
});

const getRestaurants = async (req, res) => {
  const response = await pool.query('SELECT * FROM restaurants');
  res.status(200).json(response.rows);
};

const postRestaurants = async (req, res, next) => {
  const { name, latitude, longitude } = req.query;
  try {
    const text = 'INSERT INTO restaurants (name, latitude, longitude) VALUES ($1, $2, $3)';
    const response = await pool.query(text, [name, latitude, longitude]);
    console.log(response);
    res.json({
      message: "Restaurant added successfully",
      body: {
        restaurant: {name, latitude, longitude}
      }
    });
  } catch (error) {
    next(error);
  }
}

const postUsers = async (req, res, next) => {
  const { email, name } = req.body;
  try {
    const text = 'INSERT INTO users (email, name) VALUES ($1, $2)';
    const response = await pool.query(text, [email, name]);
    console.log(response);
    res.json({
      message: "User added successfully",
      body: {
        user: {email, name}
      }
    });
  } catch (error) {
    next(error);
  }
}

const postBooking = async (req, res, next) => {
  const { restaurant_id, user_id, guests, date } = req.body;
  try {
    const text = 'INSERT INTO bookings (restaurant_id, user_id, guests, date) VALUES ($1, $2, $3, $4)';
    const response = await pool.query(text, [restaurant_id, user_id, guests, date]);
    console.log(response);
    res.json({
      message: "Booking added successfully",
      body: {
        booking: {restaurant_id, user_id, guests, date}
      }
    });
  } catch (error) {
    next(error);
  }
}

const getBookings = async (req, res) => {
  const response = await pool.query('SELECT * FROM bookings');
  res.status(200).json(response.rows);
};

module.exports = { getRestaurants, postRestaurants, postUsers, postBooking, getBookings };