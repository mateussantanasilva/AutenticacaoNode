"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
app.set('view engine', 'ejs');
app.set('views', path_1["default"].join(__dirname, 'views'));
app.use(express_1["default"].static('public'));
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(express_1["default"].json());
app.use(routes_1.router);
app.listen(process.env.PORT || 3000, function () { console.log('App is running...'); });
//# sourceMappingURL=server.js.map