import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export async function handleCheckout(priceId) {
  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
    successUrl: "https://YOURDOMAIN.com/success",
    cancelUrl: "https://YOURDOMAIN.com/cancel",
  });
}
