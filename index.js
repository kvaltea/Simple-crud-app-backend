const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const port = process.env.PORT || 3000;
const app = express();
const uri = "mongodb+srv://kotobayk:GOe69L7leL5oeSg1@knowbase.awwglht.mongodb.net/?retryWrites=true&w=majority&appName=KnowBase";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database!");
        app.listen(port, () => {
            console.log("Server is running on port " + port);
        });
    })
    .catch(err => {
        console.error("Connection failed!", err);
    });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello, my name is Hello!");
});
