"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const with_authentication_1 = require("./middlewares/with-authentication");
const with_database_1 = require("./middlewares/with-database");
const menu_1 = require("./routes/menu");
const item_1 = require("./routes/item");
const router = (app) => {
    app.post("/item", with_authentication_1.withAuthentication, with_database_1.withDatabase, item_1.postItem);
    app.get("/items", with_authentication_1.withAuthentication, with_database_1.withDatabase, item_1.getUserItems);
    app.post("/menu", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.postMenu);
    app.get("/menu/:id", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.getMenu);
    app.patch("/menu/:id", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.patchMenu);
    app.delete("/menu/:id", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.deleteMenu);
    app.get("/menus", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.getUserMenus);
};
exports.router = router;
//# sourceMappingURL=router.js.map