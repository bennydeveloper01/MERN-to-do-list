const cors = require("cors");
const express = require("express");
const app = express();
const connection = require("./database");
const tasks = require("./routes/tasks");

require('dotenv').config()

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
