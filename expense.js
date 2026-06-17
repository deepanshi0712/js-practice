let transactions = [];

function addTransaction(desc, amount) {
    transactions.push({
        id: Date.now(),
        desc,
        amount
    });
}

function getBalance() {
    return transactions.reduce(
        (sum, t) => sum + t.amount,
        0
    );
}

function showTransactions() {
    console.table(transactions);
    console.log("Balance:", getBalance());
}

addTransaction("Salary", 50000);
addTransaction("Food", -1000);
addTransaction("Recharge", -300);

showTransactions();