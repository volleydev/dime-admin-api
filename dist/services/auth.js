"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const dev = process.env.NODE_ENV == "dev";
if (dev) {
    const keyFilename = "../config/serviceAccount.json";
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(require(keyFilename)),
    });
}
else {
    firebase_admin_1.default.initializeApp();
}
//# sourceMappingURL=auth.js.map