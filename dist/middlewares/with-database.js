"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withDatabase = exports.setDatabase = void 0;
let database;
const setDatabase = (d) => (database = d);
exports.setDatabase = setDatabase;
const withDatabase = (req, res, next) => {
    if (database) {
        req.database = database;
        next();
    }
    else {
        res.status(503).send("Storage service is not available.");
    }
};
exports.withDatabase = withDatabase;
//# sourceMappingURL=with-database.js.map