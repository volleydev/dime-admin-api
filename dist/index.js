"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = require("./router");
const app = express_1.default();
const port = process.env.PORT;
// initAuthentication();
// initStorage();
// initDatabase();
app.use(body_parser_1.default.json());
router_1.router(app);
app.listen(port, () => {
    console.log("\x1b[32m", `Server: live on port ${port}.`);
});
//# sourceMappingURL=index.js.map