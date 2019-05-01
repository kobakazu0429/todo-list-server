import * as bodyParser from "body-parser";
import * as express from "express";
import * as errorhandler from "strong-error-handler";

import { todos } from "./routes/todo";

import { NODE_ENV } from "./env";

export const app = express();

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: "5mb" }));

// enable corse for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.options("*", (req, res) => {
  res.sendStatus(200);
});

app.use("/api/v1/todos", todos);

app.use(
  errorhandler({
    debug: NODE_ENV !== "prod",
    log: true
  })
);
