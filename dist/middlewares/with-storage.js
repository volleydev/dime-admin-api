"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withStorage = exports.setStorage = void 0;
let storage;
const setStorage = (s) => (storage = s);
exports.setStorage = setStorage;
const withStorage = (req, res, next) => {
    if (storage) {
        req.storage = storage;
        next();
    }
    else {
        res.status(503).send("Storage service is not available.");
    }
};
exports.withStorage = withStorage;
//# sourceMappingURL=with-storage.js.map