import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

dotenv.config();

class Database {
  public sequelize: Sequelize | undefined;

  private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private POSTGRES_USER = process.env.POSTGRES_USER as string;
  private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;
  private POSTGRES_DB = process.env.POSTGRES_DB as string;

  constructor() {
    this.connectToPostgreSQL();
  }

  private connectToPostgreSQL() {
    this.sequelize = new Sequelize({
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      database: this.POSTGRES_DB,
      dialect: "postgres",
    });

    this.sequelize
      .authenticate()
      .then(() => {
        console.log("✅ PostgreSQL has been establish successfully");
      })
      .catch((error) => {
        console.log("❌ Unable to connect to PostgreSQL database: ", error);
      });
  }
}

export default Database;
