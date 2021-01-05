import admin from "firebase-admin";

const dev = process.env.NODE_ENV == "dev";

export const initAuthentication = () => {
  if (dev) {
    const init = async () => {
      const keyFilename: any = await import("../config/serviceAccount.json");
      admin.initializeApp({
        credential: admin.credential.cert(keyFilename.default),
      });
    };
    init();
    console.log("\x1b[32m", "Authentication: live.");
  } else {
    admin.initializeApp();
  }
};
