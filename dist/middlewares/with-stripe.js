"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withStripe = exports.setStripe = void 0;
let stripe;
const setStripe = (s) => (stripe = s);
exports.setStripe = setStripe;
const withStripe = (req, res, next) => {
    if (stripe) {
        req.stripe = stripe;
        next();
    }
    else {
        res.status(503).send("Stripe service is not available.");
    }
};
exports.withStripe = withStripe;
//# sourceMappingURL=with-stripe.js.map