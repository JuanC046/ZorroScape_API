const router = require("express").Router();

const statusRouter = require("./status.router");

const loadEndpoint = (app) => {
  app.use("/api/v1", router);
  router.use("/", statusRouter);
};

module.exports = loadEndpoint;