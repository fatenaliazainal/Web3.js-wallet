//Package & Controller declaration
const express = require('express');
const router = express.Router();
var walletController = require('../controller/walletController')

//Wallet Routes
router.get("/create", walletController.create);

module.exports = router;