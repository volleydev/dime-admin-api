import Stripe from "stripe";

let stripe: Stripe;

export const initStripe = () => {
  try {
    stripe = new Stripe(process.env.STRIPE_TOKEN, {
      apiVersion: "2020-08-27",
    });
    console.log("\x1b[32m", "Stripe: live.");
  } catch (error) {
    console.log("\x1b[31m", "Stripe: down.");
    console.error(error);
  }
};
