const express = require("express");
require("dotenv").config();
const taskRouter = require("./routes/taskRoute");

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/task", taskRouter);

app.listen(port, () => console.log(`
    Example app listening on port ${port}!`
));
