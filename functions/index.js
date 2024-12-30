const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51QbLkuPwzOckrqyVqwLiCb51YPySihNCWvbSF6Bnu5xRv0N0hOqCiGjU1CSWs7os9fxmVa2bmDGtr950GHcG1ELU00gBlrOuvm"
);

const app = express();

app.use(cors({ origin: true }));

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// backend endpoint
// (http://127.0.0.1:5001/clone-558c5/us-central1/api
