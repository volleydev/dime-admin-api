import express from "express";
import admin from "firebase-admin";
import bodyParser from "body-parser";
import { imageUpload } from "./services/image-upload";

const app = express();
const port = 8080;

const dev = process.env.NODE_ENV == "dev";

if (dev) {
  const initAuth = async () => {
    const keyFilename: any = await import("../config/serviceAccount.json");

    admin.initializeApp({
      credential: admin.credential.cert(keyFilename.default),
    });
  };
  initAuth();
} else {
  admin.initializeApp();
}

app.use(bodyParser.json());

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/iam/:name", (req, res) => {
  res.send(`Hello I am ${req.params.name}`);
});

app.get("/upload", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    '<form action="upload/image" method="post" enctype="multipart/form-data">'
  );
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write("</form>");
  return res.end();
});

app.post("/upload/image", imageUpload);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
