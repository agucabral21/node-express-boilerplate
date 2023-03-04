const ErrorParser = (err) => {
  const parsedError = {
    statusCode: 500,
    message: "Internal Server Error",
  };
  /*
  if (err.name) {
    if (err.name.startsWith("{Specific} error")) {
      parsedError = {Specific}ErrorParser(err);
    }
  }
  */
  parsedError.stack = err.stack;
  return parsedError;
};

module.exports = ErrorParser;
