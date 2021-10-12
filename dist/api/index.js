"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
// Enables CORS
app.use((0, cors_1.default)({ origin: true }));
// Configure the Entity routes
var routes = express_1.default.Router();
// Add the routes to the /api endpoint
app.use('/apps', routes);
require('./keeperApp').default(routes);
exports.default = app;
//# sourceMappingURL=index.js.map