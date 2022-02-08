// import cors from "cors";
// const express = require("express");

// const port = process.env.PORT || 3000;

// const initializeExpress = (): void => {
//   const app = express();

//   app.use(cors());
//   app.use(express.json());
//   app.use(express.urlencoded());

//   app.listen();
// };

// initializeExpress();

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api/server", (req, res) => {
  res.json({ message: "Hello from server!" });
});
