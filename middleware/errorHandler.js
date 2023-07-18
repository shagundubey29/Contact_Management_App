const { constans } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constans.VALIDATION_ERROR:
            res.json({
                title : "Validation Failed",
                message : err.message,
                stackTrace: err.stack,
            });
            break;
        case constans.NOT_FOUND:
            res.json({
                title : "Not found",
                message : err.message,
                stackTrace: err.stack,
            });
            break;
        case constans.FORBIDDEN:
            res.json({
                title : "Forbidden",
                message : err.message,
                stackTrace: err.stack,
            });
            break;
        case constans.UNAUTHORIZED:
            res.json({
                title : "Unauthorized",
                message : err.message,
                stackTrace: err.stack,
            });
            break;
        case constans.SERVER_ERROR:
            res.json({
                title : "Server error",
                message : err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log("No Error, All good !");
    };
};

module.exports = errorHandler;