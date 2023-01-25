export class BankAccount {
  name: string;
  balance: number;
  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(
      `${amount} has been deposited in your account. Your current balance is ${this.balance}`
    );
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
    } else {
      this.balance -= amount;
      console.log(
        `${amount} has been withdraw from your account. Your current balance is ${this.balance}`
      );
    }
  }
}
