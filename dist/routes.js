"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var ChangePasswordController_1 = require("./controllers/ChangePasswordController");
var CreateUserController_1 = require("./controllers/CreateUserController");
var LoginController_1 = require("./controllers/LoginController");
var router = (0, express_1.Router)();
exports.router = router;
var createUser = new CreateUserController_1.CreateUserController();
var login = new LoginController_1.LoginController();
var changePassword = new ChangePasswordController_1.ChangePasswordController();
router.get('/', function (req, res) { return res.render('index', { status: req.query.status }); });
router.post('/entrar', login.handle);
router.get('/cadastrar', function (req, res) { return res.render('register', { status: req.query.status }); });
router.post('/cadastrar', createUser.handle);
router.get('/recuperar-senha', function (req, res) { return res.render('pass-recovery', { status: req.query.status }); });
router.post('/recuperar-senha', changePassword.handle);
//# sourceMappingURL=routes.js.map