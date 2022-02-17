/*----------------------------
    Get input field using ID
------------------------------*/
const incomeInput = document.getElementById('incomeInput');
const foodExpense = document.getElementById('foodExpense');
const rentExpense = document.getElementById('rentExpense');  
const clothExpense = document.getElementById('clothExpense');
const saveInput = document.getElementById('savePercent');


/*--------------------------
    Validate Input field
---------------------------- */

inputValidation(incomeInput);
inputValidation(foodExpense);
inputValidation(rentExpense);
inputValidation(clothExpense);
inputValidation(saveInput);

/*
    Remove Default value when focus
*/

removeDefaultValue(incomeInput);
removeDefaultValue(foodExpense);
removeDefaultValue(rentExpense);
removeDefaultValue(clothExpense);
removeDefaultValue(saveInput);

/*--------------------------
    For Calculate Event
---------------------------- */

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
  document.getElementById('save-btn').disabled = false;
  // incomeInput.value = '';
  // foodExpense.value = '';
  // rentExpense.value = '';
  // clothExpense.value = '';
});

/*----------------------
    Save Event
------------------------ */

document.getElementById('save-btn').addEventListener('click', function(event){

  const savings = parseInt(saveInput.value);
  
  console.log('savings ee '+totalIncome);
  console.log(saveInput)
  console.log(savings);
  const saveAmount = (totalIncome * (savings / 100)).toFixed(2);

  
  currentBalance = parseInt(document.getElementById('balance').innerText);

  console.log(saveAmount);
  console.log(currentBalance);

  if(saveAmount > currentBalance) {
    alert("You cannot save more money than you have");
  }
  else {
    document.getElementById('save-amount').innerText = saveAmount;
    document.getElementById('remaining-balance').innerText = (currentBalance - saveAmount).toFixed(2);
  }

  // saveInput.value = '';
});

/*---------------------------------------
  Function which validates input field
----------------------------------------- 
*/

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

/*--------------------------------------
  Function which removes Default value
----------------------------------------*/

function removeDefaultValue(inputID) {
  inputID.onfocus = function () {
    this.value = '';
  }
}
