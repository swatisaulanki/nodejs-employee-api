const fs = require("fs");
const path = require("path");
const getCowsayMessage = require("../utils/cowsayMessage");

const employeeFile = path.join(__dirname, "../data/employee.txt");

function handleRequest(req, res, param) {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    return res.end("<h1>Employee Management System</h1>");
  } 
  else if (req.url === "/data") {
    fs.readFile(employeeFile, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.end("Error reading file");
      }
      res.setHeader("Content-Type", "text/plain");
      res.end(data);
    });
  } 
  else if (req.url === "/fun") {
    res.setHeader("Content-Type", "text/plain");
    const message = getCowsayMessage(param);
    return res.end(message);
  } 
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page Not Found");
  }
}

module.exports = handleRequest;
