// // app.js
// const incomeForm = document.getElementById('income-form');
// const incomeDescriptionInput = document.getElementById('income-description');
// const incomeAmountInput = document.getElementById('income-amount');
// const incomeList = document.getElementById('income-list');

// const expensesForm = document.getElementById('expenses-form');
// const expensesDescriptionInput = document.getElementById(
// 	'expenses-description',
// );
// const expensesAmountInput = document.getElementById('expenses-amount');
// const expensesList = document.getElementById('expenses-list');

// const totalIncome = document.getElementById('total-income');
// const totalExpenses = document.getElementById('total-expenses');
// const balance = document.getElementById('balance');

// incomeForm.addEventListener('submit', addIncome);
// expensesForm.addEventListener('submit', addExpense);

// function addIncome(event) {
// 	event.preventDefault();
// 	const description = incomeDescriptionInput.value;
// 	const amount = parseFloat(incomeAmountInput.value);
// 	const incomeItem = document.createElement('li');
// 	incomeItem.innerHTML = `${description} <span>+ $${amount.toFixed(2)}</span>`;
// 	incomeList.appendChild(incomeItem);
// 	incomeDescriptionInput.value = '';
// 	incomeAmountInput.value = '';
// }

// function addExpense(event) {
// 	event.preventDefault();
// 	const description = expensesDescriptionInput.value;
// 	const amount = parseFloat(expensesAmountInput.value);
// 	const expenseItem = document.createElement('li');
// 	expenseItem.innerHTML = `${description} <span>- $${amount.toFixed(2)}</span>`;
// 	expensesList.appendChild(expenseItem);
// 	expensesDescriptionInput.value = '';
// 	expensesAmountInput.value = '';
// }

// function updateSummary() {
// 	const incomeItems = incomeList.querySelectorAll('li');
// 	const expenseItems = expensesList.querySelectorAll('li');

// 	let totalIncomeAmount = 0;
// 	let totalExpensesAmount = 0;

// 	incomeItems.forEach(item => {
// 		const amount = parseFloat(item.querySelector('span').textContent.slice(2));
// 		totalIncomeAmount += amount;
// 	});

// 	expenseItems.forEach(item => {
// 		const amount = parseFloat(item.querySelector('span').textContent.slice(2));
// 		totalExpensesAmount += amount;
// 	});

// 	totalIncome.textContent = `Total Income: $${totalIncomeAmount.toFixed(2)}`;
// 	totalExpenses.textContent = `Total Expenses: $${totalExpensesAmount.toFixed(
// 		2,
// 	)}`;
// 	balance.textContent = `Balance: $${(
// 		totalIncomeAmount - totalExpensesAmount
// 	).toFixed(2)}`;
// }

// updateSummary();

let balance = 0;

function updateBalance() {
	document.getElementById('balance').innerText = balance.toFixed(2);
}

function addTransaction() {
	const description = document.getElementById('transaction').value;
	const amount = parseFloat(document.getElementById('amount').value);

	if (isNaN(amount) || amount === 0 || !description) {
		alert('Please enter a valid description and amount.');
		return;
	}

	balance += amount;

	const transactionsList = document.getElementById('transactions-list');
	const transactionItem = document.createElement('li');
	transactionItem.textContent = `${description}: $${amount.toFixed(2)}`;
	transactionsList.appendChild(transactionItem);

	updateBalance();
	clearInputs();
}

function clearInputs() {
	document.getElementById('transaction').value = '';
	document.getElementById('amount').value = '';
}

updateBalance();
