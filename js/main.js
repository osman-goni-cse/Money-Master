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

  if((incomeInput.value).length == 0) {
    incomeInput.value = '0';
  }
  if((foodExpense.value).length == 0) {
    foodExpense.value = '0';
  }
  if((rentExpense.value).length == 0) {
    rentExpense.value = '0';
  }
  if((clothExpense.value).length == 0) {
    clothExpense.value = '0';
  }
  
  totalExpense = parseInt(foodExpense.value) + parseInt(rentExpense.value) + parseInt(clothExpense.value);

  totalIncome = parseInt(incomeInput.value);

  if(totalExpense > totalIncome) {
    alert('Your Expense is more than your income.');
  }
  else {
    document.getElementById('total-expense').innerText = totalExpense;
    document.getElementById('balance').innerText = totalIncome - totalExpense;
  }

  incomeInput.value = '0';
  foodExpense.value = '0';
  rentExpense.value = '0';
  clothExpense.value = '0';
});

/*----------------------
    Save Event
------------------------ */

document.getElementById('save-btn').addEventListener('click', function(event){

  if((saveInput.value).length == 0) {
    saveInput.value = '0';
  }

  const savings = parseInt(saveInput.value);
  
  const saveAmount = (totalIncome * (savings / 100)).toFixed(2);

  currentBalance = parseInt(document.getElementById('balance').innerText);

  if(saveAmount > currentBalance) {
    alert("You cannot save more money than you have");
  }
  else {
    document.getElementById('save-amount').innerText = saveAmount;
    document.getElementById('remaining-balance').innerText = (currentBalance - saveAmount).toFixed(2);
  }

  saveInput.value = '0';
});

/*---------------------------------------
  Function which validates input field
----------------------------------------- 
*/

function inputValidation(inputId) {
  inputId.addEventListener('keyup', function(event){
    let char = event.target.value;
    if(char == '-') {
      alert('Please! put a positive number');
    }
    else if(isNaN(char)) {
      alert('Please! Put a number');
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
