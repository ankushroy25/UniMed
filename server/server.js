require("dotenv").config();
var helmet = require("helmet");
const express = require("express");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const colors = require("colors");

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    headers: true,
    exposedHeaders: ["Set-Cookie"],
    methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies to be sent
    allowedHeaders: [
      "Access-Control-Allow-Origin",
      "Content-Type",
      "Authorization",
    ],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

// mongodb connection
const connectDB = require("./config/db");
connectDB();

//refactored api routes
const apiRoutes = require("./routes/apiRoutes");

app.use("/api", apiRoutes);
app.get("/appointments", (req, res) => {
  return res.send("hello world");
});

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });
}

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }
  next(error);
});
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  } else {
    res.status(500).json({
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
