import express from "express";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: process.env.PORT });
});
