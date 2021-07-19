// Login form button

const clickHandle = document.getElementById('poineerButton');
clickHandle.addEventListener('click', function () {
    const parentItem = document.getElementById('loginArea');
    parentItem.style.display = 'none';
    const transactionArea = document.getElementById('transactionArea');
    transactionArea.style.display = 'block';
})

// Deposit button event handler

const depositeBtn = document.getElementById('addDeposite');
depositeBtn.addEventListener('click', function () {
    const depositeNumber = getInputNumber('depositeAmount');
    const depositeAmount = numberVanish('depositeAmount');
    updateSpanText('currentDeposite', depositeNumber);
    updateSpanText('currentBalance', depositeNumber);
})

// Withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
   const withdrawNumber = getInputNumber('withdrawAmmount');
   updateSpanText('currentWithdraw', withdrawNumber);
   updateSpanText('currentBalance', -1 * withdrawNumber);
    const withdrawAmmount = numberVanish('withdrawAmmount');
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}
// -----Vanish number start-----
function numberVanish(id){
    document.getElementById(id).value = "";
}
// -----Vanish number end-----