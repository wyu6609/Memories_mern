import "dotenv/config";
import express from "express"; // const express = require('express');
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

// host server port
const PORT = process.env.PORT || 5000;

//create an instance of express
const app = express(); //

//middleware

// extract body portion of incoming request stream and exposes on req.body
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors()); // cross origin request

// connect routes
app.use("/posts", postRoutes);

// connect mongo database
mongoose
  .connect(process.env.mongo_uri, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    )
  )
  .catch((err) => {
    console.log(`${err} could not connect`);
  });
