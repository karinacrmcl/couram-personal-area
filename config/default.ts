import "dotenv/config";

export default {
  port: process.env.PORT,
  host: "couram.herokuapp.com",
  dbUri:
    "mongodb+srv://perfechate:177242465820@cluster0.ybrcc.mongodb.net/test?authSource=admin&replicaSet=atlas-sv8uld-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
};
