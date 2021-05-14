"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAuthentication = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
function withAuthentication(req, res, next) {
    firebase_admin_1.default
        .auth()
        .verifyIdToken(req.headers.authorization || "")
        .then((decodedToken) => __awaiter(this, void 0, void 0, function* () {
        const now = Number(String(Date.now()).substr(0, String(decodedToken.exp).length));
        const expired = decodedToken.exp < now;
        if (expired) {
            res.status(401).send({ msg: "Id Token expired.", code: 1 });
        }
        else {
            const uid = decodedToken.uid;
            req.userId = uid;
            next();
        }
    }))
        .catch(function (error) {
        res.status(404).send(error);
    });
}
exports.withAuthentication = withAuthentication;
//# sourceMappingURL=with-authentication.js.map