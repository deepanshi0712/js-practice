class BankAccount {

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {

        if (amount <= this.balance) {
            this.balance -= amount;
        }

    }

    showBalance() {
        console.log(
            `${this.owner}: ₹${this.balance}`
        );
    }

}

const account =
new BankAccount("Deepanshi", 10000);

account.deposit(5000);
account.withdraw(2000);

account.showBalance();