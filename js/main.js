const incomeInput = document.getElementById('incomeInput');
const foodExpense = document.getElementById('foodExpense');
const rentExpense = document.getElementById('rentExpense');  
const clothExpense = document.getElementById('clothExpense');

// // console.log(incomeInput.value);
// // console.log(foodExpense.value, rentExpense.value, clothExpense.value);a

inputValidation(incomeInput);
inputValidation(foodExpense);
inputValidation(rentExpense);
inputValidation(clothExpense);

// console.log(foodExpense);

// console.log(foodExpense.value, rentExpense.value, clothExpense.value);

// const totalExpense = parseInt(foodExpense.value) + parseInt(rentExpense.value) + parseInt(clothExpense.value);

// const totalIncome = parseInt(incomeInput.value);

let totalIncome, totalExpense;

document.getElementById('calculate-btn').addEventListener('click', function() {


  totalExpense = parseInt(foodExpense.value) + parseInt(rentExpense.value) + parseInt(clothExpense.value);

  totalIncome = parseInt(incomeInput.value);

  if(totalExpense > totalIncome) {
    alert('Your Expense is more than your income.');
  }
  else {
    document.getElementById('total-expense').innerText = totalExpense;
    document.getElementById('balance').innerText = totalIncome - totalExpense;
  }
  incomeInput.value = '';
  foodExpense.value = '';
  rentExpense.value = '';
  clothExpense.value = '';
});

document.getElementById('save-btn').addEventListener('click', function(event){
  const saveInput = document.getElementById('save-amount');
  inputValidation(saveInput);

  const savings = parseInt(saveInput.value);
  
  console.log('savings ee '+totalIncome);
  console.log(savings);
  const saveAmount = (totalIncome * (savings / 100)).toFixed(2);

  
  currentBalance = parseInt(document.getElementById('balance').value);

  console.log(saveAmount);
  console.log(currentBalance);

  if(saveAmount > currentBalance) {
    alert("You cannot save more money than you have");
  }
  else {
    document.getElementById('save-amount').innerText = saveAmount;
    document.getElementById('remaining-balance').innerText = currentBalance - saveAmount;
  }

  saveInput.value = '';
});

function inputValidation(inputId) {
  inputId.addEventListener('keyup', function(event){
    let char = event.target.value;
    if(isNaN(char)) {
      alert('Please! Put a number');
    }
    else if(char == '0') {
      alert('Please! Put a positive number');
    }
  });
};

// document.addEventListener('keyup', function(event) {
//   let char = event.target.value;
//   if(isNaN(char)) {
//     alert('Please! Put a number');
//   }
//   else if(char == '0') {
//     alert('Please! Put a positive number');
//   }

// });