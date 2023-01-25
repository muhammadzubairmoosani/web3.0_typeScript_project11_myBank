import inquirer from "inquirer";
import { createAccount } from "./createAccount.js";
const deposit = async (account) => {
    const { amount } = await inquirer.prompt([
        {
            type: "number",
            name: "amount",
            message: "Enter the amount you want to deposit:",
        },
    ]);
    account.deposit(amount);
    menu(account);
};
const withdraw = async (account) => {
    const { amount } = await inquirer.prompt([
        {
            type: "number",
            name: "amount",
            message: "Enter the amount you want to withdraw:",
        },
    ]);
    account.withdraw(amount);
    menu(account);
};
export const menu = async (account) => {
    const { choice } = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Selece an option:",
            choices: ["Deposit", "Withdraw", "Exit"],
        },
    ]);
    switch (choice) {
        case "Deposit":
            deposit(account);
            break;
        case "Withdraw":
            withdraw(account);
            break;
        case "Exit":
            console.log("Thank you for using our service!");
            break;
    }
};
console.log("Welcome to our bank!");
createAccount();
