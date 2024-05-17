const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, selectiveUpdateProduct, deleteProduct } = require("../controllers/product.controller.js")

router.get('/', getProducts);
router.get("/:id", getProduct);
router.route("/products").get(function (req, res) {
    res.send({
        message: "working great!!!"
    });

});

router.post("/", createProduct);


router.put("/:id", updateProduct);
router.patch("/:id", selectiveUpdateProduct);


router.delete("/:id", deleteProduct);

module.exports = router;