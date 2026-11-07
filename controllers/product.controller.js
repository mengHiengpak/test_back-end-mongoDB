const { Product } = require("../model/products.models")

exports.createProduct = async (req, res) => {
    try {
        const doc = Product.create(req.body);
        if (!doc) {
            return res.status(400).json({
                message: "Product not created",
                success: false
            })
        }

        res.status(201).json({
            message: "Product created successfully",
            success: true,
            data: doc
        })

    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            success: false
        })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if(!products) {
            return res.status(404).json({
                message: "No products found",
                success: false
            })
        }

        res.status(200).json({
            message: "Products fetched successfully",
            success: true,
            data: products
        })

    } catch (error) {
        res.status(500).json({
            message: "Error fetching products",
            success: false
        })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const paramId = req.params.id;
        if(!paramId) {
            return res.status(400).json({
                message: "Product id is required",
                success: false
            })
        }

        const product = await Product.findById(paramId)
        if(!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            })
        }

        res.status(200).json({
            message: "Product fetched successfully",
            success: true,
            data: product
        })

    } catch (error) {
        res.status(500).json({
            message: "error fetching product by id",
            success: false
        })
    }
}

exports.updateProductById = async (req, res) => {
    try {
        const paramsId = req.params.id;
        if(!paramsId) {
            return res.status(400).json({
                message: "Product id is required",
                success: false
            })
        }
        const product = await Product.findByIdAndUpdate(paramsId, req.body, { new: true})
        if(!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            })
        }

        res.status(200).json({
            message: "Product updated successfully",
            success: true,
            data: product
        })

    } catch (error) {
        res.status(500).json({
            message: "Error updating product by id",
            success: false
        })
    }
}

exports.deleteProductById = async (req, res) => {
    try {
        const paramsId = req.params.id;
        if(!paramsId) {
            return res.status(404).json({
                message: "Product id is required",
                success: false
            })
        }
        const product = await Product.findByIdAndDelete(paramsId)
        if(!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            })
        }
        res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting product by id",
            success: false
        })
    }
}