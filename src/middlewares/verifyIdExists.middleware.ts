import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { moviereRepository } from "../repositories";
import { AppError } from "../errors";

const verifyIdExits = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundMovie: Movie | null = await moviereRepository.findOneBy({
    id: Number(req.params.id),
  });

  if (!foundMovie) throw new AppError("Movie not found", 404);

  res.locals = { ...res.locals, foundMovie };

  return next();
};

export { verifyIdExits };
