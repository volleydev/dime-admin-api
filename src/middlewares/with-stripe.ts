let stripe;

export const setStripe = (s) => (stripe = s);

export const withStripe = (req, res, next) => {
  if (stripe) {
    req.stripe = stripe;
    next();
  } else {
    res.status(503).send("Stripe service is not available.");
  }
};
