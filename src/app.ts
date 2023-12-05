import "express-async-errors";
import express, { Application, json } from "express";
import { movieRouter } from "./routers";
import { handleErrors } from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/movies", movieRouter);

app.use(handleErrors);

export default app;
