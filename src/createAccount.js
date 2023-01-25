import inquirer from "inquirer";
import { BankAccount } from "./bankAccount.js";
import { menu } from "./index.js";
export const createAccount = async () => {
    const { name, initialDeposit } = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name:",
        },
        {
            type: "number",
            name: "initialDeposit",
            message: "Enter initial deposit amount:",
        },
    ]);
    const account = new BankAccount(name, initialDeposit);
    console.log(`Account created successfully for ${name} with initial deposit of ${initialDeposit}`);
    console.log(account);
    menu(account);
};
