const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./config/database");
const { testConnection } = require("./utils/connection");
const { User, Pet, FollowUp, AdoptionProces } = require("./models");
require("./models/relations");
const router = require('./routes/index');

dotenv.config();
const app = express();
app.use(express.json());

const PORT = 8000;

app.use(router);

app.get("/", (req, res) => {
  res.send("¡Welcomeeeee");
});

const startServer = async () => {
  try {
    await testConnection();
    console.log("Database connected");

    await sequelize.sync();
    console.log("Database synchronized successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
