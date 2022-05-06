import "dotenv/config";

export default {
  port: process.env.PORT,
  host: "couram.herokuapp.com",
  dbUri: process.env.MONGODB_URI,
};
