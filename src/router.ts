import { imageUpload } from "./routes/upload-image";

import { withAuthentication } from "./middlewares/with-authentication";
import { withStorage } from "./middlewares/with-storage";
import { withDatabase } from "./middlewares/with-database";

export const router = (app) => {
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

  app.post("/upload/image", withStorage, withDatabase, imageUpload);
};
