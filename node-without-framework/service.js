//creates and exports the function
exports.sampleRequest = (req, res) => {
  //parse URL to gain access to specific parts of url
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  //store any url params in a variable
  const searchTerm = reqUrl.searchParams;
  //default value for name variable if no query is found
  let name = "World";

  //check to see if query value was present
  if (searchTerm.has("name")) {
    //store search term value
    let reqName = searchTerm.get("name");
    //change the default "World" to param value
    name = reqName;
  }

  //build response variable into object
  let response = {
    text: "Hello " + name
  };

  //set the response status code to 200
  res.statusCode = 200;
  //set the response headers to indicate json response body
  res.setHeader("Content-Type", "application/json");
  //ends the response process and sends our object as a string
  res.end(JSON.stringify(response));
};

exports.testRequest = (req, res) => {
  //initialize body variable to store request body
  body = "";

  //open up a stream for the request body to flow in,
  //the request body can possibly come in multiple waves so we open a channel until we have recieved the whole body.
  req.on("data", function(chunk) {
    body += chunk;
  });

  //listen for the stream to close, and then fire our function
  req.on("end", function() {
    //parse our json stringified request body to JSON we can dig into
    let postBody = JSON.parse(body);

    //build response variable into object with the supplied request body
    let response = {
      text: "Post Request Value is " + postBody.value
    };

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  });
};

//catch all response for any unavailable routes
exports.invalidRequest = (req, res) => {
  //set response status code to 404(not found)
  res.statusCode = 404;
  //set response header to indicate plain text response body
  res.setHeader("Content-Type", "text/plain");
  //ends the response process and sends an invalid response string
  res.end("Invalid Request");
};
