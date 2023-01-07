import express, { Express } from "express";

const app = express();
const { PORT } = require("./config");
const popularService = require('../routes/popular-service');


app.use('/popularService',popularService)

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
