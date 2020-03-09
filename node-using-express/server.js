//import express module
const express = require("express");

//store instance of an express application in app variable
const app = express();

//specify port to 3000 in variable
const port = 3000;

//importing and storing controller in variable
const miniApp = require("./controller");

//mounts middleware that converts incoming request body to JSON
app.use(express.json());

//mounts controller as middleware to express instance
app.use(miniApp);

//tells server to run and which port to listen on
app.listen(port, () => console.log(`Server running on port ${port}`));
