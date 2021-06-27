export default (req, res, statusCode, payload) => {
    // Todo: code to log the error.
    res.status(statusCode.code).send(payload ? payload : statusCode.message);
}