"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStorage = void 0;
const storage_1 = require("@google-cloud/storage");
const path_1 = __importDefault(require("path"));
const with_storage_1 = require("../middlewares/with-storage");
const dev = process.env.NODE_ENV == "dev";
const initStorage = () => {
    try {
        const storage = dev
            ? new storage_1.Storage({
                keyFilename: path_1.default.join(__dirname, "./../config/serviceAccount.json"),
            })
            : new storage_1.Storage();
        with_storage_1.setStorage(storage);
        console.log("\x1b[32m", "Storage: live.");
    }
    catch (error) {
        console.log("\x1b[31m", "Storage: down.");
        console.error(error);
    }
};
exports.initStorage = initStorage;
//# sourceMappingURL=storage.js.map