const { request } = require('express');
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);



app.get('/', (req, res) => {
    res.send("Hello, my name is Hello!");
});



mongoose.connect("mongodb+srv://kotobayk:cyfUfutGQaLHA2Ze@cluster0.ztj7wpj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to database!");
        app.listen(4000, () => {
            console.log("Server is running on port 4000");
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });
