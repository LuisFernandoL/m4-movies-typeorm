// import "dotenv/config";
// import { DataSource, DataSourceOptions } from "typeorm";
// import path from "path";

// const dataSourceConfig = (): DataSourceOptions => {
//   const entitesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
//   const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

//   const dbUrl: string | undefined = process.env.DATABASE_URL;

//   if (!dbUrl) {
//     throw new Error("Missing env var: 'DATABASE_URL' ");
//   }
//   return {
//     type: "postgres",
//     url: dbUrl,
//     logging: true,
//     synchronize: false,
//     entities: [entitesPath],
//     migrations: [migrationPath],
//   };
// };

// const AppDataSource = new DataSource(dataSourceConfig());

// export { AppDataSource };

import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import path from "path";
const dataSourceOptions = (): DataSourceOptions => {
  const entities: string = path.join(__dirname, "entities/**.{js,ts}");
  const migratios: string = path.join(__dirname, "migrations/**.{js,ts}");
  if (process.env.NODE_ENV === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entities],
    };
  }
  const dbUrl: string | undefined = process.env.DATABASE_URL;
  if (!dbUrl) throw new Error("Missing .env var: DATABASE_URL");
  return {
    type: "postgres",
    url: dbUrl,
    logging: true,
    synchronize: false,
    entities: [entities],
    migrations: [migratios],
  };
};
const AppDataSource: DataSource = new DataSource(dataSourceOptions());
export { AppDataSource };
