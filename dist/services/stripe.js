"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStripe = void 0;
const stripe_1 = __importDefault(require("stripe"));
let stripe;
const initStripe = () => {
    try {
        stripe = new stripe_1.default(process.env.STRIPE_TOKEN, {
            apiVersion: "2020-08-27",
        });
        console.log("\x1b[32m", "Stripe: live.");
    }
    catch (error) {
        console.log("\x1b[31m", "Stripe: down.");
        console.error(error);
    }
};
exports.initStripe = initStripe;
//# sourceMappingURL=stripe.js.map