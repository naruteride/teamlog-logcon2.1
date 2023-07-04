const mysql = require('mysql');

var db_config = {
    host: process.env.DATABASE_HOST || '192.168.129.1',
    port: process.env.DATABASE_PORT || 3306,
    user: process.env.DATABASE_USER || 'teamlog',
    password: process.env.DATABASE_PASSWORD || 'xlafhrm',
    database: process.env.DATABASE_DATABASE || 'LOGCON',
    ssl: {
        rejectUnauthorized: process.env.DATABASE_SSL_REJECT_UNAUTHORIZED ? true : false
    }
};

/*
var db_config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'LOGCON'
};
*/


  var connection;
  
  function handleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.
  
    connection.connect((err) => {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', (err) => {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  }
  
handleDisconnect();

module.exports=connection;


