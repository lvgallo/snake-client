const {connect} = require('./client'); 
/*
// establishes a connection with the game server 
const connect = function () {   
  const conn = net.createConnection({     
    host: '165.227.47.243', // IP address here,     
    port: 50541,// PORT number here,   
  });    // interpret incoming data as text   
  conn.setEncoding("utf8");    

  conn.on('connect', () => {
    console.log('Hello');
    conn.write('Name: LVG');
  });
  
  conn.on('data', (data) => {
    console.log(data);
  })
  
  return conn; 
};  
console.log("Connecting ..."); 
connect();
*/

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = ('data', () => {
 // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
});