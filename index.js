"use strict";

const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

// Routes File
const walletRoutes = require('./api/routes/walletRoutes')

// Routing
app.use('/api/wallet', walletRoutes);

//server starts listening for any attempts from a client to connect at port: {port}
app.listen(port, () => {
    console.log("RESTful API server started on: " + port);
  });

module.exports = app;