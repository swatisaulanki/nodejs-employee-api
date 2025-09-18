const cowsay = require("cowsay");
const fs = require("fs");
const path = require("path");

const employeeFile = path.join(__dirname, "../data/employee.txt");

function getCowsayMessage(message) {
  if (message) {
    return cowsay.say({ text: message });
  }

  // Read all employee names from file
  const data = fs.readFileSync(employeeFile, "utf8");
  const names = data.split("\n").filter(name => name.trim() !== "");

  // Join all names into a single string
  const allNames = names.join(", ");

  return cowsay.say({ text: allNames });
}

module.exports = getCowsayMessage;
