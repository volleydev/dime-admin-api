"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const firestore_1 = __importDefault(require("@google-cloud/firestore"));
const path_1 = __importDefault(require("path"));
const with_database_1 = require("../middlewares/with-database");
const dev = process.env.NODE_ENV == "dev";
const projectId = process.env.GCP_PROJECT_ID;
const initDatabase = () => {
    if (dev) {
        with_database_1.setDatabase(
        // @ts-ignore
        new firestore_1.default({
            projectId,
            keyFilename: path_1.default.join(__dirname, "./../config/serviceAccount.json"),
            timestampsInSnapshots: true,
        }));
    }
    else {
        with_database_1.setDatabase(
        // @ts-ignore
        new firestore_1.default({
            projectId,
            timestampsInSnapshots: true,
        }));
    }
    console.log("\x1b[32m", "Database: live.");
};
exports.initDatabase = initDatabase;
//# sourceMappingURL=database.js.map