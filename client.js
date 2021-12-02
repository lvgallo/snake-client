const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here,
    port: 50541,// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('hello');
    conn.write('Name: LVG\n');
    conn.write('Move: up')
    
});
  conn.on('data', (data)=> {
    console.log(data);
    conn.end();
  });

  return conn;
};



module.exports = {connect}
