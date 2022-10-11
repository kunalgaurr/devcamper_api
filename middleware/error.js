const errorHandler = (error, req, res, next) => {
  // log to console for dev
  console.log(error.stack.red);

  res.status(500).json({
    success: false,
    error: error.message,
  });
};

module.exports = errorHandler;