import express from "express";
import "dotenv/config";
import cors from "cors";
import { attachPrivateRoutes } from "./routes";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

attachPrivateRoutes(app);

app.get("/", function (req, res) {
  res.json({ message: "y" });
});
