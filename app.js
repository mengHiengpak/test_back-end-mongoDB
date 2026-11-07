const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/db");
const productRoutes = require("./routes/product.route");
const { errHandler } = require("./helper/err-handler");
const { default: rateLimit } = require("express-rate-limit");

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
};

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56
})

connectDB();

app.use(cors(corsOptions));        // before routes
app.use(express.json());
app.use("/api/products", productRoutes);
app.use(errHandler);
app.use(limiter)               // error handler always last

module.exports = app;