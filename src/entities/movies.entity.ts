import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 60, unique: true, type: "varchar" })
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string | undefined | null;

  @Column({ type: "integer" })
  duration: number;

  @Column({ type: "integer" })
  price: number;
}

export default Movie;
