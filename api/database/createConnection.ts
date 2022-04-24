import mongoose, { ConnectOptions } from "mongoose";
import config from "config";
import log from "../log/logger";

export async function createConnection() {
  const dbUri =
    "mongodb+srv://perfechate:177242465820@cluster0.ybrcc.mongodb.net/couram?authSource=admin&replicaSet=atlas-sv8uld-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
  //config.get("dbUri") as string;

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
