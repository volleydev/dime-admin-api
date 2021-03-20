"use strict";
// import { imageUpload } from "./routes/upload-image";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// import { withAuthentication } from "./middlewares/with-authentication";
// import { withStorage } from "./middlewares/with-storage";
// import { withDatabase } from "./middlewares/with-database";
const router = (app) => {
    app.get("/", (req, res) => {
        res.send("Hello world!");
    });
    // app.post("/upload/image", withStorage, withDatabase, imageUpload);
};
exports.router = router;
//# sourceMappingURL=router.js.map