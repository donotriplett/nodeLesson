//import http module(built into node)
const http = require("http");

//export this file as a created http server
module.exports = http.createServer((req, res) => {
  //import service file, handles endpoint logic
  let service = require("./service.js");

  //parse URL to gain access to specific parts of url
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  //GET Endpoint /sample
  if (reqUrl.pathname === "/sample" && req.method === "GET") {
    console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);

    //send request and response to service to handle logic
    service.sampleRequest(req, res);

    //POST endpoint /test
  } else if (reqUrl.pathname === "/test" && req.method === "POST") {
    console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);

    service.testRequest(req, res);

    //Catch-all for non-existent routes
  } else {
    console.log(
      "Request Type:" + req.method + " Invalid Endpoint: " + reqUrl.pathname
    );

    service.invalidRequest(req, res);
  }
});
