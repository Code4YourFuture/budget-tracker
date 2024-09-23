//Step 1 Target the elements on the screen you care about
const form = document.getElementById("budget-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");
const submitButton = document.getElementById("add-expense");
const expenseList = document.getElementById("expense-list");
const descriptionError = document.getElementById("description-error");

let expenses = [];

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();

    const description = descriptionInput.value;
    const amount = amountInput.value;
    const category = categorySelect.value;

    //check that the description is valid
    descriptionError.textContent = "";
    descriptionError.style.display = "none";

    if(!description || description.trim() === ""){
        descriptionError.textContent = "Please enter a description for the expense";
        descriptionError.style.display = "block";
        return;
    }

    let expense = {
        description: description,
        amount: amount,
        category: category
    }

    expenses.push(expense);
    console.log(expenses);
    form.reset();

    displayExpenses();
}

function displayExpenses(){
    expenseList.innerHTML = "";

    expenses.forEach((expense) => {
        const li = document.createElement("li");
        li.textContent = `${expense.description} - ${expense.amount} - ${expense.category}`;

        if(expense.category === "Rent"){
            li.classList.add("rent-expense");
        }
        else if(expense.category === "Entertainment"){
            li.classList.add("entertainment-expense");
        }
        else{
            li.classList.add("groceries-expense");
        }

        expenseList.appendChild(li);
    })
}