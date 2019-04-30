import { createServer } from "http";
import sequelize from "./sequelize";

import { app } from "./app";

const port = process.env.PORT || 3000;

(async () => {
  await sequelize.sync();

  createServer(app).listen(port, async () => {
    console.info(`You can see here: http://localhost:${port}`);
  });
})();
