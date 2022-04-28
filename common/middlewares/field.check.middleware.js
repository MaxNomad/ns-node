const { Joi } = require('express-validation')

exports.signUp = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    }),
}
exports.signIn = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    }),
}

exports.deleteRev = {
    body: Joi.object({
        prj_id: Joi.string().required(),
    }),
}

exports.hideRev = {
    body: Joi.object({
        prj_id: Joi.string().required(),
        hide: Joi.bool().required()
    }),
}

exports.editRev = {
    body: Joi.object({
        prj_id: Joi.string().required(),
        rating: Joi.string(),
        reviewer_work: Joi.string(),
        the_review: Joi.string()
    }),
}
