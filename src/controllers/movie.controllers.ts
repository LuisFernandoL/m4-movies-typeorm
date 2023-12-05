import { Request, Response } from "express";
import { Movie } from "../entities";
import { movieServices } from "../services";
import { MovieRead, Pagination } from "../interfaces";

const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await movieServices.createMovie(req.body);

  return res.status(201).json(movie);
};

const raedMovie = async (req: Request, res: Response): Promise<Response> => {
  const { pagination } = res.locals;
  const movies: Pagination = await movieServices.readMovie(pagination);

  return res.status(200).json(movies);
};

const editionMovie = async (req: Request, res: Response): Promise<Response> => {
  const { foundMovie } = res.locals;
  const { body } = req;
  const movie: Movie = await movieServices.editionMovie(foundMovie, body);
  return res.status(200).json(movie);
};

const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
  await movieServices.deleteMovie(res.locals.foundMovie);

  return res.status(204).json();
};
export default { createMovie, raedMovie, editionMovie, deleteMovie };
