import express from "express";
import "dotenv/config";
import cors from "cors";
import { attachPrivateRoutes } from "./routes";
import { createConnection } from "./database/createConnection";
import { job } from "./core/cron";
import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);

  attachPrivateRoutes(app);
  createConnection();
  job.start();
});

const publicPath = path.join(__dirname, "..", "..", "client");

app.use(express.static(publicPath));
console.log("**********************", publicPath);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// app.get("/", function (req, res) {
//   res.json({ message: `Server listening on ${PORT}` });
// });
