var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Nowitzski41!",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
  start();

  });

var Table = require('cli-table');
 
var table = new Table({
    head: ['ID', 'Product', 'Department', 'Price', 'Quantity']
  , colWidths: [30, 30, 30, 30, 30]
});
 
table.push(
    ['First value', 'Second value', 'Third Value', 'Fourth Value', 'Fifth Value']
);
 
console.log(table.toString());



function start() {
  inquirer
    .prompt({
      name: "buy",
      type: "input",
      message: "Welcome to Bamazon!!! What would you like to buy today?",
      choices: []
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.buy.toUpperCase() === "id") {
        postAuction();
      }
      else {
        bidAuction();
      }
    });
}





function afterConnection() {
  connection.query("SELECT * FROM bamazon", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

