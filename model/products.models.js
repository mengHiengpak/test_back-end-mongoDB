const { default: mongoose } = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    inventory: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
})

exports.Product = mongoose.model("Product", productsSchema)