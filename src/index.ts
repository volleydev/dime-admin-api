import express from "express";
import admin from "firebase-admin";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

const dev = process.env.NODE_ENV == "dev";

if (dev) {
  const initAuth = async () => {
    const keyFilename: any = await import("./config/serviceAccount.json");
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

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
