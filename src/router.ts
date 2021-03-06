import { withAuthentication } from "./middlewares/with-authentication";
import { withDatabase } from "./middlewares/with-database";

import {
  postMenu,
  getMenu,
  patchMenu,
  deleteMenu,
  getUserMenus,
} from "./routes/menu";
import { postItem, getUserItems } from "./routes/item";
import { postUser } from "./routes/user";

export const router = (app) => {
  app.post("/user", withDatabase, postUser);

  app.post("/item", withAuthentication, withDatabase, postItem);
  app.get("/items", withAuthentication, withDatabase, getUserItems);

  app.post("/menu", withAuthentication, withDatabase, postMenu);
  app.get("/menu/:id", withAuthentication, withDatabase, getMenu);
  app.patch("/menu/:id", withAuthentication, withDatabase, patchMenu);
  app.delete("/menu/:id", withAuthentication, withDatabase, deleteMenu);
  app.get("/menus", withAuthentication, withDatabase, getUserMenus);
};
