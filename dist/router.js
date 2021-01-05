"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const upload_image_1 = require("./routes/upload-image");
const with_storage_1 = require("./middlewares/with-storage");
const with_database_1 = require("./middlewares/with-database");
const router = (app) => {
    app.get("/", (req, res) => {
        res.send("Hello world!");
    });
    app.get("/iam/:name", (req, res) => {
        res.send(`Hello I am ${req.params.name}`);
    });
    app.get("/upload", (req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<form action="upload/image" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write("</form>");
        return res.end();
    });
    app.post("/upload/image", with_storage_1.withStorage, with_database_1.withDatabase, upload_image_1.imageUpload);
};
exports.router = router;
//# sourceMappingURL=router.js.map