const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};



const account = {
    balance: 0,
    transactions: [],
    createTransaction(amount, type) {
        const obj = { id: amount, amount, type };
        return obj;
    },




    deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
},






   withdraw(amount) {
    if (this.balance < amount) {
        console.log("недостатньо коштів");
        return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
},





   getBalance() {
     return this.balance;
   },





   getTransactionDetails(id) {
    for(const lalala of this.transactions) {
        if(lalala.id === id) {
            return lalala;
        }
    }
   },




    getTransactionTotal(type) {
    let sum = 0;
    for(const item of this.transactions) {
        if(item.type === type) {
sum += item.amount;
        }
    }
    return sum;
   },
};





account.deposit(200);
account.deposit(400);

account.withdraw(100);

//console.log(account.getBalance());
//console.log(account.getTransactionDetails(200));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

//console.log(account);
console.log(JSON.stringify(account));



//В консолі буде виведено:

/*
600
100
"{'balance':500,'transactions':[{'id':200,'amount':200,'type':'deposit'},{'id':400,'amount':400,'type':'deposit'},{'id':100,'amount':100,'type':'withdraw'}]}"
*/
