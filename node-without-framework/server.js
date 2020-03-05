//specify hostname to our localhost in variable
const hostname = "127.0.0.1";

//specify port to 3000 in variable
const port = 3000;

//store server in variable
const server = require("./controller.js");

//tells server to run and which port/hostname to run on
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})