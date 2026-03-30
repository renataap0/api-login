const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

//Rotas
const userRoutes = require('./routes/users');
app.use('/user', userRoutes);


module.exports = app;