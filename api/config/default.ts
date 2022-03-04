import "dotenv/config";

export default {
  port: process.env.PORT,
  host: "localhost",
  dbUri: process.env.MONGODB_URI,
};
