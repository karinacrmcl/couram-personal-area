import express from "express";
import "dotenv/config";
import cors from "cors";
import { attachPrivateRoutes } from "./routes";
import { createConnection } from "../database/createConnection";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);

  attachPrivateRoutes(app);
  createConnection();
});

app.get("/", function (req, res) {
  res.json({ message: `Server listening on ${PORT}` });
});
