"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const body_parser_1 = __importDefault(require("body-parser"));
const image_upload_1 = require("./services/image-upload");
const app = express_1.default();
const port = 8080;
const dev = process.env.NODE_ENV == "dev";
if (dev) {
    const initAuth = () => __awaiter(void 0, void 0, void 0, function* () {
        const keyFilename = yield Promise.resolve().then(() => __importStar(require("./config/serviceAccount.json")));
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert(keyFilename.default),
        });
    });
    initAuth();
}
else {
    firebase_admin_1.default.initializeApp();
}
app.use(body_parser_1.default.json());
// define a route handler for the default home page
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
app.post("/upload/image", image_upload_1.imageUpload);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map