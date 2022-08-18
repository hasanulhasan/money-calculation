
document.getElementById('deposit-btn').addEventListener('click', function(){
  const dipositAmountStr = document.getElementById('depositeIN').value;
  const dipositAmount = parseFloat(dipositAmountStr);
  const dipositAmountShowStr = document.getElementById('depositShow').innerText;
  const dipositAmountShow = parseFloat(dipositAmountShowStr);
  const currentTotal = dipositAmountShow + dipositAmount;
  const TotalDeposit = currentTotal;
  document.getElementById('depositeIN').value = "";
  document.getElementById('depositShow').innerText = currentTotal;
  const balanceAmountStr = document.getElementById('balanceShow').innerText;
  const balanceAmount = parseFloat(balanceAmountStr);
  const newBalance = balanceAmount + dipositAmount;
  document.getElementById('balanceShow').innerText = newBalance;
});

