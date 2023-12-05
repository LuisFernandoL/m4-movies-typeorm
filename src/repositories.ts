import { AppDataSource } from "./data-source";
import { Movie, MovieRepo } from "./interfaces";

const moviereRepository: MovieRepo = AppDataSource.getRepository(Movie);

export { moviereRepository };
