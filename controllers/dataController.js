import { validateUser } from '../validators/validations.js';
import * as Consts from '../constants/constants.js';
import Users from '../model/UserSchema.js';
import errorHandler from '../controllers/errorController.js';
import responseHandler from './responseController.js';
import { readStats } from '../util/common.js';

export const addData = async (req, res) => {
    try {
        const { error, value } = validateUser(req.body)
        if (error) errorHandler(req, res, Consts.Status.badRequest);
        else if (value) {
            new Users({ value })
                .save((err, user) => {
                    return err
                        ? errorHandler(req, res, Consts.Status.notAcceptable)
                        : responseHandler(req, res, Consts.Status.accepted, user);
                })
        } else errorHandler(req, res, Consts.Status.badRequest);
    } catch (error) {
        errorHandler(req, res, Consts.Status.serverError);
    }
}

export const updateData = (req, res) => {
    try {
        const { error, value } = validateUser(req.body)
        if (error) errorHandler(req, res, Consts.Status.badRequest);
        else if (value) {
            Users.updateOne(
                { username: req.username },
                { $set: value },
                async (err, data) => {
                    err
                        ? errorHandler(req, res, Consts.Status.notAcceptable)
                        : responseHandler(req, res, Consts.Status.updated, data);
                }
            )
        }
        else errorHandler(req, res, Consts.Status.badRequest);
    } catch (error) {
        errorHandler(req, res, Consts.Status.serverError);
    }
}

export const getStats = (req, res) => {
    res.json(readStats());
}