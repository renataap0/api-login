const express = require('express');
const app = express();
dotenv.config();
const dotenv = require('dotenv');

app.use(express.json());

//Rotas
const userRoutes = require('./routes/users');
app.use('/user', userRoutes);


module.exports = app;