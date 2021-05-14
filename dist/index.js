"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const authentication_1 = require("./services/authentication");
const database_1 = require("./services/database");
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
const app = express_1.default();
const port = process.env.PORT;
authentication_1.initAuthentication();
database_1.initDatabase();
// initStorage();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
router_1.router(app);
app.listen(port, () => {
    console.log("\x1b[32m", `Server: live on port ${port}.`);
});
exports.default = app;
//# sourceMappingURL=index.js.map