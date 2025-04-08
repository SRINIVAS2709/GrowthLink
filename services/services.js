const amount = document.getElementById("amount");
const tenure = document.getElementById("tenure");
const rate = document.getElementById("rate");

const amountVal = document.getElementById("amountVal");
const tenureVal = document.getElementById("tenureVal");
const rateVal = document.getElementById("rateVal");
const emiResult = document.getElementById("emiResult");

function updateValuesAndCalculate() {
  amountVal.textContent = `₹${Number(amount.value).toLocaleString("en-IN")}`;
  tenureVal.textContent = `${tenure.value} Year${tenure.value > 1 ? "s" : ""}`;
  rateVal.textContent = `${rate.value}%`;

  const P = parseFloat(amount.value);
  const N = parseFloat(tenure.value) * 12;
  const R = parseFloat(rate.value) / 12 / 100;

  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  emiResult.textContent = `EMI: Per month ₹${emi.toFixed(2).toLocaleString("en-IN")}`;
}

amount.addEventListener("input", updateValuesAndCalculate);
tenure.addEventListener("input", updateValuesAndCalculate);
rate.addEventListener("input", updateValuesAndCalculate);

// Initial call
updateValuesAndCalculate();