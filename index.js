const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },  
    () => console.log('connected to db!')
);

//Import Routes
const authRoute = require('./routes/auth');


//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Up and running'));
