import mongoose, { ConnectOptions } from "mongoose";
import config from "config";
import log from "../log/logger";

export async function createConnection() {
  const dbUri = config.get("dbUri") as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}

export const db = mongoose.connection;
