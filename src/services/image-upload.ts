import formidable from "formidable";
import { Storage } from "@google-cloud/storage";
import path from "path";

const dev = process.env.NODE_ENV == "dev";

let storage;

if (dev) {
  try {
    storage = new Storage({
      keyFilename: path.join(__dirname, "../../config/serviceAccount.json"),
    });
  } catch (error) {
    console.log("Error storage", error);
  }
} else {
  storage = new Storage();
}

export const imageUpload = (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, function (error, fields, files) {
    if (error) {
      res.end({ error });
    }
    console.log(files.filetoupload);
    const { path } = files.filetoupload;
    async function uploadFile() {
      const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);

      // const destination = "";

      try {
        const res = await bucket.upload(String(path), {
          // destination,
          gzip: true,
          metadata: {
            cacheControl: "public, max-age=31536000",
          },
        });
        console.log(res);
      } catch (error) {
        console.log("Upload Error", error);
        res.end({ error });
      }

      console.log(`${path} uploaded to ${process.env.GCP_BUCKET_NAME}.`);
      res.send(`${path} uploaded to ${process.env.GCP_BUCKET_NAME}.`);
    }

    uploadFile().catch((err) => console.log("Error", err));
  });
};
