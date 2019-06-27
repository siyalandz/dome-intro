// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettings = document.querySelector(".callTotalSettings ");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
//ar settingsbillBtn = document.querySelector(".settingsbillBtn");
var settingsbillBtn = document.querySelector(".settingsbillBtn");
// get refences to all the settings fields
var callCostSett = document.querySelector(".callCostSetting");
var smsCostSett = document.querySelector(".smsCostSetting");
var warningSettingElem = document.querySelector(".warningLevelSetting");
var criticalSettingElem = document.querySelector(".criticalLevelSetting");

//var calculateBtn = do ment.querySelector(".calculateBtn");
var button = document.querySelector(".button");
//get a reference to the billTotal element
var billTotal = document.querySelector(".billTotal");
//get a reference to the billString
var billString = document.querySelector(".billString");

//get a reference to the add button
var factorySett = SettingsBillFactory()
var factorySett = SettingsBillFactory()

button.addEventListener('click', () => {

    //in the event listener get the value from the billItemTypeRadio radio buttons
    var elem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    factorySett.addTotalBill(elem.value);


    var data = factorySett.getAllTotals();

    callTotalSettings.innerHTML = data['calls'].toFixed(2);
    smsTotalSettings.innerHTML = data['smss'].toFixed(2);
    totalSettings.innerHTML = data['total'].toFixed(2);
    totalSettings.classList.remove("danger");
    totalSettings.classList.remove("warning");
    totalSettings.classList.add(factorySett.changeColor());

    var totalSum = factorySett.getAllTotals(['total']);

    if (totalSum.total >= criticalSettingElem.value) {
        button.disabled = true;
    }
})

//get a reference to the 'Update settings' button
var updateSettingsButton = document.querySelector('.updateSettings');

//add an event listener for when the update button is pressed
updateSettingsButton.addEventListener('click', () => {

    var updateObj = {
        'callCost': callCostSett.value,
        'smsCost': smsCostSett.value,
        'warningLevel': warningSettingElem.value,
        "criticalLevel": criticalSettingElem.value
    }

    factorySett.upDateSettingBill(updateObj)
    totalSettings.classList.remove("danger");
    totalSettings.classList.remove("warning");
    totalSettings.classList.add(factorySett.changeColor());

    if (updateSettingsButton) {
        button.disabled = false;
    }

})

// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.