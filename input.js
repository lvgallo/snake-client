// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  if(key === "\u0003"){
    console.log("BYE BYE!")
    process.exit();
    } 
    if (key === "w") {
      console.log('up');
      connection.write("Move: up");
    }
    if (key === "s") {
      console.log('down');
      connection.write("Move: down");
    }
    if (key === "a") {
      console.log('left');
      connection.write("Move: left");
    } if (key === "d") {
      console.log('right');
      connection.write("Move: right");
    } if (key === "z") {
      console.log('message');
      connection.write("Say: Watch out");
  }
};

module.exports= { setupInput }