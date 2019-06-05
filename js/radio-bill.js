// get a reference to the sms or call radio buttons
var radioBillBtn = document.querySelector(".radioBillAddBtn");
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var callTotalTwo1 = document.querySelector(".callTotalTwo");
var smsTotalTwo1 = document.querySelector(".smsTotalTwo");
var totalTwo1 = document.querySelector(".totalTwo");


// billItemType will be 'call' or 'sms'

//get a reference to the add button

//create a variable that will keep track of the total bill
var callsTotal1 = 0;
var smsTotal1 = 0;
//add an event listener for when the add button is pressed


//in the event listener get the value from the billItemTypeRadio radio buttons
function radioTotalAddBtnBillTotal() {

  // billItemType will be 'call' or 'sms'
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  if (radioBillBtn) {
    // logic goes here

    //update the correct total
    if (checkedRadioBtn.value === "call") {
      callsTotal1 += 2.75
    } else if (checkedRadioBtn.value === "sms") {
      smsTotal1 += 0.75;
    }

    callTotalTwo1.innerHTML = callsTotal1.toFixed(2);
    smsTotalTwo1.innerHTML = smsTotal1.toFixed(2);
    var totalC = callsTotal1 + smsTotal1;

    if (totalC >= 50) {
      // adding the danger class will make the text red
      totalTwo1.classList.add("danger");
    } else if (totalC >= 30) {
      totalTwo1.classList.add("warning");

    }
  }
  totalTwo1.innerHTML = totalC.toFixed(2);
}


radioBillBtn.addEventListener('click', radioTotalAddBtnBillTotal);