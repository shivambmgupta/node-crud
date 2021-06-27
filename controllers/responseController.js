export default (req, res, status, data = undefined) => {
    res.status(status.code).send({ message: status.message, data  });
}