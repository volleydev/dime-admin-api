"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const with_authentication_1 = require("./middlewares/with-authentication");
const with_database_1 = require("./middlewares/with-database");
const menu_1 = require("./routes/menu");
const router = (app) => {
    app.post("/menu", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.postMenu);
    app.get("/menu/:id", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.getMenu);
    app.patch("/menu/:id", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.patchMenu);
    app.delete("/menu/:id", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.deleteMenu);
    app.get("/user/:id/menus", with_authentication_1.withAuthentication, with_database_1.withDatabase, menu_1.getUserMenus);
    app.get("/menus", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send([{ id: "1" }, { id: "2" }, { id: "3" }]);
    });
};
exports.router = router;
//# sourceMappingURL=router.js.map