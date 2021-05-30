const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'pokedex'
});

connection.connect(err => {
  err ? console.log('error connecting to database') : console.log('connected to database');
});

connection.query(`SELECT 1 + 1 AS solution`, (err, results) => {
  err ? console.log('err queryingdb', err) : console.log(`The solution is: ${results[0].solution}`);
});

module.exports = connection;