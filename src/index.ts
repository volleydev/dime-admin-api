import express from "express";
import bodyParser from "body-parser";
import { initAuthentication } from "./services/authentication";
import { initStorage } from "./services/storage";
import { initDatabase } from "./services/database";

import cors from "cors";

import { router } from "./router";

const app = express();
const port = process.env.PORT || 8081;

initAuthentication();
initDatabase();
// initStorage();

app.use(cors());
app.use(bodyParser.json());

router(app);

app.listen(port, () => {
  console.log("\x1b[32m", `Server: live on port ${port}.`);
});

export default app;
