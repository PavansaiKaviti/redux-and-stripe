import Stripe from "stripe";
//import
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
}); // configure

// endpoint
const endpointSecret =
  "whsec_79922f25a130b76177d97ea6a2ae8b6a719481bcc1f9bad0ecddce9091ebb244";

export const POST = async (request) => {
  const rawbody = await request.text();

  const sig = request.headers.get("Stripe-Signature");
  let event;
  try {
    event = stripe.webhooks.constructEvent(rawbody, sig, endpointSecret);
    switch (event.type) {
      case "charge.failed":
        var responseData = event.data.object;
        break;
      case "charge.pending":
        var responseData = event.data.object;
        break;
      case "charge.succeeded":
        var responseData = event.data.object;
        console.log(responseData);
        break;
      // Handle other event types as needed
      default:
        console.log(`Unhandled event type ${event.type}`);
        responseData = { message: `Unhandled event type ${event.type}` };
    }

    // Return a response with the event data
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response({ error }, { status: 400 });
  }
  // Handle the event
};
