export class BankAccount {
    name;
    balance;
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.deposit = this.deposit.bind(this);
        this.withdraw = this.withdraw.bind(this);
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} has been deposited in your account. Your current balance is ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        }
        else {
            this.balance -= amount;
            console.log(`${amount} has been withdraw from your account. Your current balance is ${this.balance}`);
        }
    }
}
