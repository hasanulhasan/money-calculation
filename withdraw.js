document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmountStr = document.getElementById("withdrawField").value;
  const withdrawAmount = parseFloat(withdrawAmountStr);

  // Validate input
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Please enter a valid withdraw amount.");
    return;
  }

  // Get current balance
  const balanceAmountStr = document.getElementById("balanceShow").innerText;
  const balanceAmount = parseFloat(balanceAmountStr);

  // Check if withdrawal is greater than balance
  if (withdrawAmount > balanceAmount) {
    alert("Insufficient balance.");
    return;
  }

  // Get previous withdrawal amount
  const withdrawTextStr = document.getElementById("withdrawText").innerText;
  const withdrawPrevious = parseFloat(withdrawTextStr);

  // Calculate new withdrawal total
  const totalWithdraw = withdrawPrevious + withdrawAmount;

  // Update withdraw display
  document.getElementById("withdrawText").innerText = totalWithdraw.toFixed(1);

  // Update balance
  const newBalance = balanceAmount - withdrawAmount;
  document.getElementById("balanceShow").innerText = newBalance.toFixed(1);

  // Clear input field
  document.getElementById("withdrawField").value = "";
});
