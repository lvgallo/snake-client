const net = require("net");  

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541,// PORT number here,
  });
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: LVG`)
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  
  // interpret incoming data as text

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect}