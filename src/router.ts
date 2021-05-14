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

  app.get("/menus", withAuthentication, withDatabase, getUserMenus);
};
