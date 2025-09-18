const http = require("http");
const handleRequest = require("./routes/api");

const param = process.argv[2]; // Dynamic message from command line

const server = http.createServer((req, res) => {
  handleRequest(req, res, param);
});

server.listen(3030, () => {
  console.log("Server running on http://localhost:3030");
});
