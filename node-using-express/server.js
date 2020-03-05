//import express module
const express = require("express");

//store instance of an express application in app variable
const app = express();

//specify port to 3000 in variable
const port = 3000;

//store controller in variable
const controller = require("./controller");

//converts incoming request body to JSON
app.use(express.json());

//mounts controller to express instance
app.use(controller);

//tells server to run and which port to listen on
app.listen(port, () => console.log(`Example app listening on port ${port}`));
