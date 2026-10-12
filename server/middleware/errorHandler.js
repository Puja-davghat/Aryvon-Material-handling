function errorHandler(err, req, res, next) {
  console.error('[ServerError]', err);

  const statusCode = err.status || err.statusCode || 500;
  const response = {
    success: false,
    message: err.message || 'An unexpected server error occurred. Please try again later.'
  };

  // Only expose stack in development if explicitly desired
  if (process.env.NODE_ENV === 'development') {
    response.debug = err.stack;
  }

  res.status(statusCode).json(response);
}

module.exports = errorHandler;
