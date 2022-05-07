import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import { attachPrivateRoutes } from "./routes";
import { createConnection } from "./database/createConnection";
import { job } from "./core/cron";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const publicPath = path.join(__dirname, "build");

app.use(express.static(publicPath));

console.log(publicPath);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  attachPrivateRoutes(app);
  createConnection();
  job.start();
  console.log(`Server listening on ${PORT}`);
});
