let myAccount = {
    name: 'Simon Minifie',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

addExpense(myAccount, 2.50)
addIncome(myAccount, 1000)
addExpense(myAccount, 350)
addExpense(myAccount, 3.75)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
