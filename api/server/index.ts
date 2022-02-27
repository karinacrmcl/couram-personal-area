import express from "express";
import "dotenv/config";
import cors from "cors";
import { attachPrivateRoutes } from "./routes";
import axios from "axios";

const PORT = process.env.PORT || 3001;
const apiUrl = `http://api.countrylayer.com/v2/`;

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// attachPrivateRoutes(app);

app.get("/countries", async (req, res) => {
  // try {
  return axios
    .get(`${apiUrl}all?access_key=${process.env.COUNTRYLAYER_API_KEY}`)
    .then((res) => console.log(res.data));
  // } catch (error) {
  // window.open(
  // `https://stackoverflow.com/search?q=${error.message}`,
  // "_blank"
  // );
  // }
});
// );
app.get("/", function (req, res) {
  res.json({ message: "ok" });
});
