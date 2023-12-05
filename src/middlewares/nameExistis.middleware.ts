import { NextFunction, Request, Response } from "express";
import { resourceUsage } from "process";
import { moviereRepository } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

const nameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  if (!name) {
    return next();
  }
  const foundName: Movie | null = await moviereRepository.findOneBy({
    name: req.body.name,
  });

  if (foundName) throw new AppError("Movie already exists.", 409);

  return next();
};

export { nameExists };
