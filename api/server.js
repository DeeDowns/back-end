const express = require("express");
const authRouter = require("../auth/auth-router");
const propertiesRouter = require("../properties/properties-router");
const listingsRouter = require("../listings/listings-router")
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger)

const restricted = require("../auth/restricted-middleware");

server.get("/", (req, res) => {
  res.status(200).json({ Welcome: "to AirBnB Server" });
});

server.use("/api/auth", authRouter);
server.use("/api/properties", restricted, propertiesRouter);
server.use('/api/listings', restricted, listingsRouter)

function logger(req, res, next) {
  console.log(`a ${req.method} request was made to ${req.url}`)
  next()
}

module.exports = server;