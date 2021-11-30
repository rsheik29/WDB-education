const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Mongoose stuffs
const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/auth-hw";

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
    console.log("Database connected")
})

db.on('error', (error) => {
    console.log(error)
})


//Import routes
const userRoute = require('./route/user.js')
const shopRoute = require('./route/shop.js')


//http://localhost:3000/user
app.use('/user', userRoute);

app.use('/shop', shopRoute);

app.listen(port, () => {
    console.log('listening on port ' + String(port))
})