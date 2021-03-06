const VerifyUserMiddleware = require('./middlewares/verify.user.middleware');
const AuthorizationController = require('./controllers/authorization.controller');
const AuthValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const FieldMiddleware = require('../common/middlewares/field.check.middleware');
const { validate } = require('express-validation')

exports.routesConfig = function (app) {

    app.post('/sign-in', [
        validate(FieldMiddleware.signIn),
        VerifyUserMiddleware.isPasswordAndUserMatch,
        VerifyUserMiddleware.check2FA,
        AuthorizationController.login
    ]);

    app.post('/refresh', [
        AuthValidationMiddleware.validJWTNeeded,
        AuthorizationController.verifyJWTBlacklist,
        AuthValidationMiddleware.verifyRefreshBodyField,
        AuthValidationMiddleware.validRefreshNeeded,
        AuthorizationController.login
    ]);
    app.put('/sign-out', [
        AuthValidationMiddleware.validJWTNeeded,
        AuthorizationController.verifyJWTBlacklist,
        AuthorizationController.JWTLogout
    ]);

    // app.post('/auth/oauth2callback', [

    // ]);

    // app.post('/auth/googleauth', [

    // ]);
};