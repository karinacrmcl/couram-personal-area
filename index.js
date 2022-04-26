// import express from "express";
const express = require("express");

require("dotenv/config");
const cors = require("cors");
// import cors from "cors";
const path = require("path");
// import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

const publicPath = path.join(__dirname, "client", "build");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
