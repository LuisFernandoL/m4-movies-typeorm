import { Router } from "express";
import { movieControllers } from "../controllers";
import {
  nameExists,
  pagination,
  validateBody,
  verifyIdExits,
} from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

const movieRouter: Router = Router();

movieRouter.post(
  "",
  validateBody(movieCreateSchema),
  nameExists,
  movieControllers.createMovie
);

movieRouter.get("", pagination, movieControllers.raedMovie);

movieRouter.use("/:id", verifyIdExits);

movieRouter.patch(
  "/:id",
  validateBody(movieUpdateSchema),
  nameExists,
  movieControllers.editionMovie
);
movieRouter.delete("/:id", movieControllers.deleteMovie);

export default movieRouter;
