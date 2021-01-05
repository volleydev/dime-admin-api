"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const authentication_1 = require("./services/authentication");
const storage_1 = require("./services/storage");
const database_1 = require("./services/database");
const stripe_1 = require("./services/stripe");
const router_1 = require("./router");
const app = express_1.default();
const port = process.env.PORT;
authentication_1.initAuthentication();
storage_1.initStorage();
database_1.initDatabase();
stripe_1.initStripe();
app.use(body_parser_1.default.json());
router_1.router(app);
app.listen(port, () => {
    console.log("\x1b[32m", `Server: live on port ${port}.`);
});
//# sourceMappingURL=index.js.map