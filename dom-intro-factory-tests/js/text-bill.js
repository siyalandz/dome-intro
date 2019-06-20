// get a reference to the textbox where the bill type is to be entered
var textbillBtn = document.querySelector(".addToBillBtn");
var billTypeText = document.querySelector(".billTypeText");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var totalCostElem = document.querySelector(".totalCost")
//get a reference to the add button

//create a variable that will keep track of the total bill
var callsTotal = 0.00;
var smsTotal = 0.00;
//add an event listener for when the add button is pressed

function textTotalAddBtntBillTotal() {
    //get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    ///update the correct total
    if (billTypeEntered === "call") {
        callsTotal += 2.75
    } else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }

    callTotalOne.innerHTML = callsTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    totalCostElem.innerHTML = (callsTotal + smsTotal).toFixed(2);

     var totalCost = callsTotal + smsTotal;

    // //color the total based on the criteria
     if (totalCost >= 50) {
       // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    } if (totalCost >= 30) {
       totalCostElem.classList.add("warning");

 }

}

textbillBtn.addEventListener('click', textTotalAddBtntBillTotal);