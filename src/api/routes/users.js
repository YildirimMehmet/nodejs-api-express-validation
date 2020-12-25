const express = require('express');
const { validate } = require('express-validation')

const UserValidation = require('../../validations/UserValidation');

// api/users
const usersRouter = () => {
    const router = express.Router();

    router.post('/create', validate(UserValidation.create, {}, {}), async (req, res) => {
        // TODO
        var result = "Yeni kullanıcı eklendi.";
        res.status(201).send(result);
    })

    router.post('/login', validate(UserValidation.login, {}, {}), async (req, res) => {
        // TODO
        var result = "Giriş yapıldı";
        res.status(200).send(result);
    })

    return router;
};


module.exports = usersRouter;