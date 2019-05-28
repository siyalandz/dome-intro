// get a reference to the sms or call radio buttons
var radiobillBtn = document.querySelector(".radiobillBtn");
    // billItemType will be 'call' or 'sms'
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
//get a reference to the add button
raioBillAddBtneBtn.addEventListener('click'.radioBillAddBtn );
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
radiobillBtn.addEventListener('click', radiobillBtnClicked);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
