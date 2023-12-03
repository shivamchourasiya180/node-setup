const { Pool, Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'secret',
  port: 5432,
})
client.connect(function(err) {
    if (err) {
      throw(err)
  } 
  console.log("Database Connected successfully");
});

module.exports = client;