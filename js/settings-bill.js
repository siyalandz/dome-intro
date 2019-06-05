// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettings = document.querySelector(".callTotalSettings ");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
//ar settingsbillBtn = document.querySelector(".settingsbillBtn");
var settingsbillBtn = document.querySelector(".settingsbillBtn");
// get refences to all the settings fields
var callCostSett = document.querySelector(".callCostsetting");
var smsCostSett = document.querySelector(".smsCostSetting");
var warningLevcallsTotallSetting = document.querySelector(".warningLevelSetting");
var criticalLecallsTotalelSetting = document.querySelector(".criticalLevelSetting");
//var calculateBtn = do ment.querySelector(".calculateBtn");
var addButton = document.querySelector(".button");
//get a reference to the billTotal element
//var  billTotal = document.querySelector(".billTotal");
var billTotal = document.querySelector(".billTotal");
//get a reference to the billString
//var billString = document.querySelector(".billStrng");
var billString = document.querySelector(".billString");
//get a reference to the add button
var callsTotalSttng = 0;
var smsTotalSttng = 0;

addButton.addEventListener('click', () => {

    var elem = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (elem.value === "call") {
        callsTotalSttng += 2.75
    } else if (elem.value === "sms") {
        smsTotalSttng += 0.75;
    }

});

//get a reference to the 'Update settings' button
var updateSettingsButton = document.querySelector('.updateSettings');

updateSettingsButton.addEventListener('click',() => {
    var callCostSettVal = callCostSett.value
    var smsCostSettVal = smsCostSett.value
    var warningLevcallsTotallSettValue = warningLevelSett.value
    var criticalLecallsTotalelSettVal = criticalLevelSett.value
   
})
//add an event listener for when the add button is pressed
 //addbutton.addEventListener('click',updateSettingsButton)
 



//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
