//get a reference to the calculate button
var calculateBtnElem = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
var billStringElement = document.querySelector(".billString");
var myFactory = phoneBillFactory()




var billString=""
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked() {
    // logic goes var billString = billStringField.value;
    billString = billStringElement.value;
    var billTotal = myFactory.add(billString);
    //split the string
    
    // var billItems = billString.split(",");
    
    // var billTotal = 0;

    // for (var i = 0; i < billItems.length; i++) {
    //     var billItem = billItems[i].trim();
    //     if (billItem === "call") {
    //         billTotal += 2.75;
    //     } else if (billItem === "sms") {
    //         billTotal += 0.75;
    //     }
    
    //calculateBtnElem
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    if (billTotal >= 50) {
        //adding the danger class will make the text red
        billTotalElement.classList.add("danger");
    }
    if (billTotal >= 30) {
        billTotalElement.classList.add("warning");
    }
    if (billTotal <= 50) {
        //adding the danger class will make the text red
        billTotalElement.classList.remove("danger");
    }
    if (billTotal <= 30) {
        billTotalElement.classList.remove("warning");
    }
    }
    
    




calculateBtnElem.addEventListener('click', calculateBtnClicked);

//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

// get the string entered in the textArea

//link the function to a click event on the calculate button
