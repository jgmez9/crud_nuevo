import { Umzug, SequelizeStorage } from "umzug";
import sequelize from "./db.js";

export const seeder = new Umzug({
  migrations: { glob: "src/seeders/*.ts" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize, modelName: "SequelizeSeeders" }), 
  logger: console,
});