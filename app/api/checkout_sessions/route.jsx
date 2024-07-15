import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) => {
  try {
    const body = await request.text();
    const data = JSON.parse(body);
    console.log(process.env.STRIPE_SECRET_KEY, data);

    const lineItems = data.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100, // Ensure amount is in cents
      },
      quantity: product.qty,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000", // replace with your actual success URL
      cancel_url: "http://localhost:3000", // replace with your actual cancel URL
    });

    return new Response(JSON.stringify(session.url));
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
