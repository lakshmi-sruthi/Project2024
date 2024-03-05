//imports express.js web framework into node.js application
//variable express contains functionality to create servers, define routes , handle http req etc

const express = require('express');
const app = express(); //newly created express application instance
const chalk = require('chalk'); //debugging 
const path = require('path');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

const { Pool } = require('pg');

// Create a new pool instance with your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project2024',
  password: '123456789',
  port: 5432, // default PostgreSQL port
});

app.use(morgan('tiny')); //HTTP request logger middleware for Node. js

//sets up middleware to serve static files (eg html)
app.use(express.static(path.join(__dirname,'client/public/')));

app.get("/api", async (req, res) => {
    try {
      // Query the cars table to fetch car names
      const result = await pool.query('SELECT brand FROM cars');
  
      // Extract the car names from the result
      const carNames = result.rows.map(row => row.brand);
  
      // Send the car names as JSON response
      res.json({ carNames });
    } catch (error) {
      // If an error occurs, send an error response
      console.error('Error fetching car names:', error);
      res.status(500).json({ error: 'An error occurred while fetching car names' });
    }
  });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT,()=>{
    console.log(`listening to port ${chalk.green(PORT)}`);
});
//to run app ,command node app.js or npm start
//everytime change is made nodemon monitors and restarts the app