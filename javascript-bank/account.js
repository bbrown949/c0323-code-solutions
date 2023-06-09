/* exported Account */
// /* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  const object = new Transaction('deposit', amount);
  if (amount > 0 && amount % 1 === 0) {
    this.transactions.push(object);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  const object = new Transaction('withdrawal', amount);
  if (amount > 0 && amount % 1 === 0) {
    this.transactions.push(object);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  let balance = 0;
  if (this.transactions.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        balance += this.transactions[i].amount;
      } else {
        balance -= this.transactions[i].amount;
      }
    }
    return balance;
  }
};
