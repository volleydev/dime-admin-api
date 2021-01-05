import Stripe from "stripe";

export const createCustomer = async (
  { body: { name, email }, userId, database, stripe },
  res
) => {
  try {
    const stripeAccounts = database.collection("stripeAccounts");

    const params: Stripe.CustomerCreateParams = {
      name,
      email,
    };
    const { id }: Stripe.Customer = await stripe.customers.create(params);

    const ref = stripeAccounts.add({ userId, id });
    res.status(200).send(ref.id);
  } catch (error) {
    res.status(503).send("Cannot create new Stripe customer.");
  }
};
