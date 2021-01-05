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
    const { storage, database } = req;
    const form = new formidable_1.default.IncomingForm();
    const handleParse = (error, fields, files) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            res.end({
                error,
                message: "Error pccured during form.parse in 'upload-image.ts'",
            });
        }
        const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);
        const timestamp = Date.now();
        const destination = `times/${timestamp}.${files.filetoupload.type.split("/")[1]}`;
        const images = database.collection("images");
        let bucketResponse;
        try {
            bucketResponse = yield bucket.upload(files.filetoupload.path, {
                destination,
                gzip: true,
                metadata: {
                    cacheControl: "public, max-age=31536000",
                },
            });
        }
        catch (error) {
            console.log("Bucket Error", error);
            res.end({ error });
        }
        let imageReference;
        const url = process.env.GCP_STORAGE_URL +
            process.env.GCP_BUCKET_NAME +
            "/" +
            destination;
        try {
            imageReference = yield images.add({
                destination,
                url,
                timestamp,
                bucketId: bucketResponse[0].metadata.id,
            });
        }
        catch (error) {
            console.log("Database Error", error);
        }
        res.send({ id: imageReference.id, url });
    });
    form.parse(req, handleParse);
};
exports.imageUpload = imageUpload;
//# sourceMappingURL=upload-image.js.map