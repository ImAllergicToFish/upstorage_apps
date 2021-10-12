"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (app) {
    app.get("/keeper/download", require('./KeeperDownload').default);
    app.get("/keeper/version", require('./keeperVersion').default);
});
//# sourceMappingURL=index.js.map