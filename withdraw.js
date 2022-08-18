document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawAmountStr = document.getElementById('withdrawField').value;
  const withdrawAmount = parseFloat(withdrawAmountStr);
  const withdrawTextStr = document.getElementById('withdrawText').innerText;
  const withdrawPrevious = parseFloat(withdrawTextStr);
  const currentWithdraw = withdrawPrevious - withdrawAmount;
  const TolatWithdraw = currentWithdraw;
  document.getElementById('withdrawField').value = "";
  document.getElementById('withdrawText').innerText = Math.abs(currentWithdraw);
  const balanceAmountStr = document.getElementById('balanceShow').innerText;
  const balanceAmount = parseFloat(balanceAmountStr);
  const newBalance = balanceAmount - withdrawAmount;
  document.getElementById('balanceShow').innerText = newBalance;
})