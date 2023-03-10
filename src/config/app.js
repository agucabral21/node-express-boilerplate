const express = require("express");
const dotenv = require("dotenv");
const APIv1 = require("../routes");
const { morgan, errorHandler, urlNotFound } = require("../middlewares");

dotenv.config();

const app = express();

app.set("json spaces", 2);
app.use(express.json());
app.use(morgan);

app.use("/api/v1", APIv1);

// Response for every other route not specified
app.all("*", urlNotFound);
app.use(errorHandler);

module.exports = app;
