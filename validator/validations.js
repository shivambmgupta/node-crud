import Joi from '@hapi/joi';

const userValidationSchema = Joi.object().keys({
    name: Joi.string().regex(REGEXes.nameRegex).required(),
    username: Joi.string().required(),
    gender: Joi.any().valid("Male", "Female"),
})


const userSchemaOptions = {
    abortEarly: false // Include all the errors
}

export const validateUser = (user) => {
    try {
        return userValidationSchema.validate(user, userSchemaOptions);
    } catch (error) {
        // Code to log the error goes here.
     }
}