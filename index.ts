import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { attachPrivateRoutes } from "./routes";
import { createConnection } from "./database/createConnection";
import { job } from "./core/cron";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

const publicPath = path.join(__dirname, "client", "build");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  attachPrivateRoutes(app);
  createConnection();
  job.start();
  console.log(`Server listening on ${PORT}`);
});
