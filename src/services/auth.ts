import admin from "firebase-admin";

const dev = process.env.NODE_ENV == "dev";

if (dev) {
  const keyFilename = "../config/serviceAccount.json";
  admin.initializeApp({
    credential: admin.credential.cert(require(keyFilename)),
  });
} else {
  admin.initializeApp();
}
