import express from "express";
import bodyParser from "body-parser";

import { initAuthentication } from "./services/authentication";
import { initStorage } from "./services/storage";
import { initDatabase } from "./services/database";
import { initStripe } from "./services/stripe";

import { router } from "./router";

const app = express();
const port = process.env.PORT;

initAuthentication();
initStorage();
initDatabase();
initStripe();

app.use(bodyParser.json());

router(app);

app.listen(port, () => {
  console.log("\x1b[32m", `Server: live on port ${port}.`);
});
