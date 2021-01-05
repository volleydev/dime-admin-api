"use strict";
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
exports.imageUpload = void 0;
const formidable_1 = __importDefault(require("formidable"));
const imageUpload = (req, res) => {
    const form = new formidable_1.default.IncomingForm();
    const { storage } = req;
    form.parse(req, function (error, fields, files) {
        if (error) {
            res.end({ error });
        }
        // console.log(files.filetoupload);
        const { path, type } = files.filetoupload;
        function uploadFile() {
            return __awaiter(this, void 0, void 0, function* () {
                const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);
                const destination = `times/${Date.now()}.${type.split("/")[1]}`;
                console.log({ destination });
                try {
                    const res = yield bucket.upload(String(path), {
                        destination,
                        gzip: true,
                        metadata: {
                            cacheControl: "public, max-age=31536000",
                        },
                    });
                    // console.log(res);
                }
                catch (error) {
                    console.log("Upload Error", error);
                    res.end({ error });
                }
                console.log(`${path} uploaded to ${process.env.GCP_BUCKET_NAME}.`);
                res.send(`${path} uploaded to ${process.env.GCP_BUCKET_NAME}.`);
            });
        }
        uploadFile().catch((err) => console.log("Error", err));
    });
};
exports.imageUpload = imageUpload;
//# sourceMappingURL=upload-image.js.map