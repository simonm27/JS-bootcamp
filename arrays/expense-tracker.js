const account = {
    name: 'Simon Minifie',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description, 
            amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description,
            amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount
        })
        balance = totalIncome - totalExpenses
        
        return `${this.name} has a balance of £${balance}. £${totalIncome} in income and £${totalExpenses} in expenses.`
    }
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)

//console.log(account.expenses[0].amount)
console.log(account.expenses)

console.log(account.getAccountSummary())
//console.log(account.getAccountSummary())
