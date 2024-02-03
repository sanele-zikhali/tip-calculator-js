let billInput = document.getElementById("bill-input");
let tipInput = document.getElementById("tip-input");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let totalBill = document.getElementById("total-bill");
let numOfPeople = document.getElementById("people-counter");
let counter = 1;
let totalBillText = document.getElementById("total-bill");
let resetButton = document.getElementById("clear-btn");

function calcuateBill(numPips) {
  let numOfPeople = Number(numPips);
  let billAmt = Number(billInput.value);
  let tip = Number(tipInput.value);
  let totalBill = 0;
  let tipAmount = 0;

  if (tip > 0) {
    tipAmount = billAmt * (tip / 100);
  }
  totalBill = billAmt + tipAmount;
  totalBill = totalBill / numOfPeople;
  totalBillText.innerText = Math.round(totalBill, 4);

  return totalBill;
}

billInput.onkeyup = () => {
  calcuateBill(1);
};
tipInput.onkeyup = () => {
  calcuateBill(1);
};

increaseBtn.addEventListener("click", () => {
  if (billInput.value != "") {
    counter += 1;
    numOfPeople.innerText = counter;
    calcuateBill(counter);
  }
});

decreaseBtn.addEventListener("click", () => {
  if (counter > 1) {
    counter -= 1;
    numOfPeople.innerText = counter;
    calcuateBill(counter);
  }
});

resetButton.addEventListener("click", () => {
  window.location.replace("index.html");
});
