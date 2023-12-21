const express = require("express");
const cors = require("cors");
const pinoHttp = require("pino-http");

const articlesRouter = require("./articles/articles.router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.use(pinoHttp());
app.use(cors());
app.use(express.json());

app.use("/articles", articlesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
