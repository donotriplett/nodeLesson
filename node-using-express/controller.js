//import express module and calling Router class constructor(similar to http.createServer)
const router = require("express").Router();

//import service file, handles endpoint logic
let service = require("./service.js");

//GET endpoint /sample
router.get("/sample", (req, res) => {
  //parse URL to gain access to specific parts of url
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);

  //send request and response to service to handle logic
  service.sampleRequest(req, res);
});

//Post endpoint /test
router.post("/test", (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);
  service.testRequest(req, res);
});

//Catch-all for non-existent routes
router.use((req, res) => {
  service.invalidRequest(req, res);
});

//export our mini-app
module.exports = router;
