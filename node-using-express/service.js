//creates and exports the function
exports.sampleRequest = (req, res) => {

  //parse URL to gain access to specific parts of url
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  //store any url params in a variable
  const searchTerm = reqUrl.searchParams;

  //default value for name variable if no query is found
  let name = "World";

  console.log(searchTerm);

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

  //sends the requester a response with status 200 and our response object
  res.status(200).json(response);
};

exports.testRequest = (req, res) => {
  //build response variable into object with the supplied request body
  let response = {
    text: "Post Request Value is " + req.body.value
  };

  //sends the requester a response with status 200 and our response object
  res.status(200).json(response);
};

//catch all response for any unavailable routes
exports.invalidRequest = (req, res) => {
  //sends the requester a response with status 404 and "invalid request" as text
  res.status(404).send("Invalid Request: Route does not exist");
};
