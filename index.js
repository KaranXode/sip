function calculate() {
  var investment = parseFloat(document.getElementById("investment").value);
  var rate = parseFloat(document.getElementById("rate").value) / 100;
  var duration = parseInt(document.getElementById("duration").value);

  var yearlyRate = Math.pow(1 + rate, 1 / 12) - 1;
  var totalInvestment = 0;
  var totalInterestEarned = 0;

  var tableHTML =
    "<table><tr><th>Year</th><th>Month</th><th>Investment Amount (₹)</th><th>Interest Earned (₹)</th><th>Total Amount (₹)</th></tr>";
  for (var year = 1; year <= duration; year++) {
    for (var month = 1; month <= 12; month++) {
      var monthIndex = (year - 1) * 12 + month;
      var interestEarned = totalInvestment * yearlyRate;
      totalInterestEarned += interestEarned;
      totalInvestment += investment;
      totalInvestment += interestEarned;
      var totalAmount = totalInvestment.toFixed(2);
      interestEarned = interestEarned.toFixed(2);
  

    var rowBackgroundColor = (month % 12 === 0) ? "background-color: #27ae60;color:#fff;" : "";
    

    tableHTML += "<tr style='" + rowBackgroundColor + "'><td>" + year + "</td><td>" + monthIndex + "</td><td>" + investment.toFixed(2) + "</td><td>" + interestEarned + "</td><td>" + totalAmount + "</td></tr>";

    }
  }
  tableHTML += "</table>";

  var totalsHTML = `<p>Total Investment Amount: ₹<strong>${(
    investment *
    duration *
    12
  ).toFixed(2)}</strong></p>`;
  totalsHTML += `<p>Total Interest Earned: ₹<strong>${totalInterestEarned.toFixed(
    2
  )} </strong></p>`;
  totalsHTML += `<p>Total Amount: ₹<strong class="light">${totalInvestment.toFixed(
    2
  )}</strong></p>`;

  document.getElementById("totals").innerHTML = totalsHTML;
  document.getElementById("result").innerHTML = tableHTML;
}
