import { withAuthentication } from "./middlewares/with-authentication";
import { withDatabase } from "./middlewares/with-database";

import {
  postMenu,
  getMenu,
  patchMenu,
  deleteMenu,
  getUserMenus,
} from "./routes/menu";

export const router = (app) => {
  app.post("/menu", withAuthentication, withDatabase, postMenu);
  app.get("/menu/:id", withAuthentication, withDatabase, getMenu);
  app.patch("/menu/:id", withAuthentication, withDatabase, patchMenu);
  app.delete("/menu/:id", withAuthentication, withDatabase, deleteMenu);

  app.get("/user/:id/menus", withAuthentication, withDatabase, getUserMenus);

  app.get("/menus", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send([{ id: "1" }, { id: "2" }, { id: "3" }]);
  });
};
