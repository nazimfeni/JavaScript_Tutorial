  
    var balanceText = document.getElementById('balance').textContent;
    alert(balanceText)
    var balance = parseFloat(balanceText);
    

    function updateBalanceDisplay() {
      document.getElementById('balance').textContent = balance.toFixed(2);
    }

    function showMessage(msg) {
      const box = document.getElementById('messageBox');
      box.textContent = msg;
      
    }

    function getAmount() {
      return parseFloat(document.getElementById('amountInput').value);
    }

    function checkBalance() {
      showMessage(`Your current balance is ${balance.toFixed(2)}`);
    }

    function deposit() {
      const amount = getAmount();
      if (amount > 0) {
        balance += amount;
        updateBalanceDisplay();
        showMessage(`Deposited ${amount.toFixed(2)} successfully.`);
      } else {
        showMessage("Please enter a valid amount to deposit.");
      }
    }

    function withdraw() {
      const amount = getAmount();
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalanceDisplay();
        showMessage(`Withdrew ${amount.toFixed(2)} successfully.`);
      } else if (amount > balance) {
        showMessage("Insufficient balance.");
      } else {
        showMessage("Please enter a valid amount to withdraw.");
      }
    }
  