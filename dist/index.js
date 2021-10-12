"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("./api"));
var PORT = 8080;
api_1.default.listen(PORT, 'localhost', function () {
    // updateApps()
    // setInterval(updateApps, 1000*3600*24)
    console.log("Listening on port " + PORT);
});
//# sourceMappingURL=index.js.map