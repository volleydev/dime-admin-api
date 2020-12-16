"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const dev = process.env.NODE_ENV == "dev";
console.log(process.env.NODE_ENV);
const initAuth = () => {
    console.log({ dev });
    if (dev) {
        const keyFilename = "../config/serviceAccount.json";
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert(require(keyFilename)),
        });
        console.log("Success");
    }
    else {
        firebase_admin_1.default.initializeApp();
    }
};
exports.default = initAuth;
//# sourceMappingURL=auth.js.map