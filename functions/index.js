const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51M7LbASA1HsM4iva9vA3n7syyL0u3E8zGYXolpv2EOFUtsrJMyhLK7tZagYOQqU8ARwuPtwMa3mO1yEmEPDDUtLi00GnDUsfTr"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/deepakpalccet", (request, response) =>
  response.status(200).send({
    name: "deepak pal",
    roll_no: "co19524",
    college: "ccet",
  })
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
    payment_method_types: ["card"],
    description: "Software development services ",
  });
  // OK - Created
  response.status(201).send({ client_secret: paymentIntent.client_secret });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-ca8fa/us-central1/api
