"use strict";
// import { imageUpload } from "./routes/upload-image";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const with_authentication_1 = require("./middlewares/with-authentication");
// import { withStorage } from "./middlewares/with-storage";
// import { withDatabase } from "./middlewares/with-database";
const router = (app) => {
    app.get("/", with_authentication_1.withAuthentication, (req, res) => {
        res.send("Hello world!");
    });
    // app.post("/upload/image", withStorage, withDatabase, imageUpload);
};
exports.router = router;
//# sourceMappingURL=router.js.map