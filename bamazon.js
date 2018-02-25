var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

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
  });
 start();


function displayStore() {

connection.query("SELECT * FROM bamazon", function(err, res) {
    if (err) throw err;


  table = new Table({
    head: ['ID', 'Product', 'Department', 'Price', 'Quantity']
  , colWidths: [30, 30, 30, 30, 30]
  });
 
 for (var i = 0; i < res.length; i++) {

  table.push(
    [res[i].id, res[i].product, res[i].department, res[i].price, res[i].quantity]
    );
  }

console.log(table.toString());
  });

}

function start() {
  inquirer
    .prompt({
      name: "buy",
      type: "input",
      message: "Welcome to Bamazon!!! Do you want to shop with us today?",
      choices: ["yes", "no"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.buy.toLowerCase() === "yes") {
        displayStore();
      }
      else {
        console.log("Come back soon!!!")
      }
    });
}