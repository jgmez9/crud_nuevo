import { Umzug, SequelizeStorage } from "umzug";
import sequelize  from "./db.js";

export const migrator = new Umzug({
  migrations: { glob: "src/migrations/*.ts" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});