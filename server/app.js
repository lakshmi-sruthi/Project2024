//imports express.js web framework into node.js application
//variable express contains functionality to create servers, define routes , handle http req etc

const express = require('express');
const app = express(); //newly created express application instance
const chalk = require('chalk'); //debugging 
const path = require('path');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny')); //HTTP request logger middleware for Node. js

//sets up middleware to serve static files (eg html)
app.use(express.static(path.join(__dirname,'client/public/')));

app.get('/',(req , res) => {
    res.send('hello sruthi')
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT,()=>{
    console.log(`listening to port ${chalk.green(PORT)}`);
});
//to run app ,command node app.js or npm start
//everytime change is made nodemon monitors and restarts the app