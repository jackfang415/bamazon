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

//Shows the table of the store
function displayStore() {

    connection.query("SELECT * FROM bamazon", function(err, res) {
        if (err) throw err;


        table = new Table({
            head: ['ID', 'Product', 'Department', 'Price', 'Quantity'],
            colWidths: [10, 30, 30, 10, 10]
        });

        for (var i = 0; i < res.length; i++) {

            table.push(
                [res[i].id, res[i].product, res[i].department, res[i].price, res[i].quantity]
            );
        }

        console.log(table.toString());
        buy();
    });
}

//The welcome message of the store. The user gets to choose if they want to continue or exit the store.

function start() {
    inquirer
        .prompt({
            name: "buy",
            type: "input",
            message: "Welcome to Bamazon!!! Do you want to shop with us today?",
            choices: ["yes", "no"]
        })
        .then(function(answer) {
          
            if (answer.buy.toLowerCase() === "yes") {
                displayStore();
            } else {
                console.log("Come back soon!!!")
                connection.end();
            }
        });
}

//Connected to the SQL database and prompts the user to pick an item and choose the quantity.

function buy() {

    connection.query("SELECT * FROM bamazon", function(err, res) {
        if (err) throw err;

        inquirer
            .prompt([{

                    name: "choice",
                    type: "rawlist",
                    choices: function() {
                        var choiceArray = [];
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].product);
                        }
                        return choiceArray;
                    },

                    message: "What would you like to buy? (Please Enter An ID Number of The Product)"
                },

                {

                    name: "quantity",
                    type: "input",
                    message: "How many would you like to buy?"
                }

            ]).then(function(answer) {

                var itemQuantity = answer.quantity;
                var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].product === answer.choice) {
                        chosenItem = res[i];
                    }

                }

                if (chosenItem.quantity >= parseInt(answer.quantity)) {


                var updateStock = chosenItem.quantity - parseInt(answer.quantity)
                console.log(updateStock);

                connection.query("UPDATE bamazon SET? WHERE?", [

                      {

                        quantity: updateStock

                      },

                      {

                        id: chosenItem.id

                      }
                  ],

                  function(error) {

                    if(error) throw err;
                    console.log("sold")
                    displayStore();

                  }

                  );
                }

                else {
                  console.log("Out Of Stock!!!")
                }
              }) 

    });

}