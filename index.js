const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");
function calcTotal() {
  const billValue = bill.value;
  const tipValue = tip.value;
  const totalValue = billValue * (1 + tipValue / 100);
  total.innerText = totalValue.toFixed(2);
}
btn.addEventListener("click", calcTotal);
