import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import * as entity from "../entitites/Context";

dotenv.config();

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: entity,
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((error: any) => {
    console.log(error.message);
  });

export { AppDataSource };
