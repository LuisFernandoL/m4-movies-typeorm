import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import {
  MovieCreate,
  MovieRead,
  MovieUpdate,
  Pagination,
  PaginationParams,
} from "../interfaces";
import { moviereRepository } from "../repositories";
import { AppError } from "../errors";

const createMovie = async (data: MovieCreate): Promise<Movie> => {
  return await moviereRepository.save(data);
};

const readMovie = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<Pagination> => {
  const [movie, count]: Array<MovieRead | number> =
    await moviereRepository.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movie,
  };
};

const editionMovie = async (
  movie: Movie,
  data: MovieUpdate
): Promise<Movie> => {
  return await moviereRepository.save({ ...movie, ...data });
};

const deleteMovie = async (movie: Movie): Promise<void> => {
  await moviereRepository.remove(movie);
};

export default { createMovie, readMovie, editionMovie, deleteMovie };
