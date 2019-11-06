const express = require('express');

const app = express();

// Middlewares
// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// const connectionData = {
//   user: 'postgres',
//   host: 'localhost',
//   database: 'reservas',
//   password: '',
//   port: 5432,
// }
// const client = new Client(connectionData)

// // Insertar y mostrar restaurantes

// const insertRestaurants = async (name, longitude, latitude) => {
//   await client.connect()
//   const text = 'INSERT INTO restaurants (name, latitude, longitude) VALUES($1, $2, $3)'
//   const values = [name, longitude, latitude];
//   try {
//     await client.query(text, values);
//     await client.end()
//   } catch (error) {
//     console.log(error.stack);
//   }
// }

// const fetchRestaurants = async () => {
//   await client.connect();
//   const res = await client.query("select * from restaurants");
//   console.log(res.rows);
//   await client.end();
// }



// app.get('/restaurants', (req, res) => {
//   fetchRestaurants();
// });
// app.post('/restaurants/', (req, res) => {
//   console.log("Post");
//   console.log(req.query);
  
//   insertRestaurants(req.query.name, req.query.longitude, req.query.latitude);
// });

// app.post('/user', (req, res) => {

// });

// app.post('/booking', (req, res) => {

// });

// app.get('/booking', (req, res) => {

// })

app.listen(3001);