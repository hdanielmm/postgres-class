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

module.exports = { getRestaurants };