import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter Your First number"
    },
    {
        type: "number",
        name: "numberTwo",
        massage: "Enter Your Second number"
    },
    {
        type: "list",
        name: "operator",
        message: "Enter Your Operator",
        choices: ["+", "-", "*", "/"]
    },
]);
// Step2
const { numberOne, numberTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("invalid operator");
}
console.log(`${numberOne} ${operator} ${numberTwo} =${result}`);
