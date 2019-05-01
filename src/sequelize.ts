import { Sequelize } from "sequelize-typescript";

import { DB_CONFIG, NODE_ENV } from "./env";
import { ToDo } from "./models/ToDo";

const sequelize = new Sequelize({
  dialect: DB_CONFIG.DIALECT,
  host: DB_CONFIG.HOST,
  database: DB_CONFIG.DATABASE,
  username: DB_CONFIG.USER,
  password: DB_CONFIG.PASSWORD,
  port: DB_CONFIG.DB_PORT,
  dialectOptions: {
    insecureAuth: true
  },
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
  logging: NODE_ENV === "dev" ? true : false
});

sequelize.addModels([ToDo]);

export default sequelize;
