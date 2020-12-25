'use strict';

const { Joi } = require('express-validation')

module.exports = {
    create: {
        body: Joi.object({
            firstname: Joi.string()
                .required(),
            surname: Joi.string()
                .required(),
            username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required(),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            created: Joi.date()
                .default(Date.now),
        })
    },
    login: {
        body: Joi.object({
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required(),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        })
    }
}