document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmountStr = document.getElementById("depositeIN").value;
  const depositAmount = parseFloat(depositAmountStr);

  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Please enter a valid deposit amount.");
    return;
}

  const depositAmountShowStr = document.getElementById("depositShow").innerText;
  const depositAmountShow = parseFloat(depositAmountShowStr);
  const currentTotal = depositAmountShow + depositAmount;
  const TotalDeposit = currentTotal;
  document.getElementById("depositeIN").value = "";
  document.getElementById("depositShow").innerText = currentTotal;
  const balanceAmountStr = document.getElementById("balanceShow").innerText;
  const balanceAmount = parseFloat(balanceAmountStr);
  const newBalance = balanceAmount + depositAmount;
  document.getElementById("balanceShow").innerText = newBalance;
});
