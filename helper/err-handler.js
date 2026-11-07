exports.errHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let errMessage = 'server is error'

    if(err.name === "ValidationError") {
        const errors = Object.values(err.errors).map(el => {
            return {
                path: el.path,
                message: el.message
            }
        })
        statusCode = 400;
        errMessage = errors
    }

    if(err.code === 11000) {
        const field = Object.keys(err.keysValue)[0];
        errMessage = `Duplicate value for field ${field}`;
    }

    if(process.env.NODE_ENV === "development"){
        res.status(statusCode).json({
            success: false,
            message: errMessage,
            stack: err.stack
        })
    } else {
        res.status(statusCode).json({
            success: false,
            error: errMessage || "server error"
        })
    }
}