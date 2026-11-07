const express = require("express");
const { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require("../controllers/product.controller");
const productRoutes = express.Router();

productRoutes.route('/')
    .post(createProduct)
    .get(getAllProducts)

productRoutes.route("/:id")
    .get(getProductById)
    .patch(updateProductById)
    .delete(deleteProductById)

module.exports = productRoutes;
