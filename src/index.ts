import express, { Express } from "express";

const app = express();
const { PORT } = require("./config");


app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
