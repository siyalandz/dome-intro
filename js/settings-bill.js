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
var warningLevcallsTotallSetting = document.querySelector(".warningLevelSetting");
var criticalLecallsTotalelSetting = document.querySelector(".criticalLevelSetting");
//var calculateBtn = do ment.querySelector(".calculateBtn");
var button = document.querySelector(".button");
//get a reference to the billTotal element
//var  billTotal = docutotalSettingsment.querySelector(".billTotal");
var billTotal = document.querySelector(".billTotal");
//get a reference to the billString
//var billString = document.querySelector(".billStrng");
var billString = document.querySelector(".billString");
//get a reference to the add button
var callsTotalSttng = 0;
var smsTotalSttng = 0;
var totalS = 0;
button.addEventListener('click', () => {

    var elem = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (elem.value === "call") {
        callsTotalSttng += Number(callCostSett.value);
    } else if (elem.value === "sms") {
        smsTotalSttng += Number(smsCostSett.value);
    }
    
    callTotalSettings.innerHTML = callsTotalSttng.toFixed(2);
    smsTotalSettings.innerHTML = smsTotalSttng.toFixed(2);
    totalS = smsTotalSttng + callsTotalSttng;
    totalSettings.innerHTML = totalS.toFixed(2);


       colourIndicator();
    // if(totalS >= warningLevcallsTotallSetting.value) {
    //     totalSettings.classList.add("warning");
    //  }
     
    //if(totalS >= criticalLecallsTotalelSetting.value) {
         //adding the danger class will make the text red
        //  totalSettings.classList.add("danger"); 
        //     //adding the danger class will make the text red
        //     button.disabled = true;
        //  } 
      })  



      function colourIndicator(){
        if(totalS >= warningLevcallsTotallSetting.value && totalS < criticalLecallsTotalelSetting.value) {
            totalSettings.classList.add("warning"); 
            totalSettings.classList.remove("danger"); 
         }
         
         
        if(totalS >= criticalLecallsTotalelSetting.value) {
             //adding the danger class will make the text red
             totalSettings.classList.add("danger"); 
             totalSettings.classList.remove("warning"); 
                //adding the danger class will make the text red
                button.disabled = true;
             
             }
          else {
            button.disabled = false;
          }

    

         

      };

     


//get a reference to the 'Update settings' button
var updateSettingsButton = document.querySelector('.updateSettings');

updateSettingsButton.addEventListener('click', () => {
    var callCostSettVal = callCostSett.value
    var smsCostSettVal = smsCostSett.value
    var warningLevcallsTotallSettValue = warningLevcallsTotallSetting.value
    var criticalLecallsTotalelSettVal = criticalLecallsTotalelSetting.value

colourIndicator();
    if(updateSettingsButton){
      button.disabled = false;
      totalSettings.classList.remove("danger");
      totalSettings.classList.remove("warning");
      
      }  else if(warningLevcallsTotallSetting.value <="warningLevelSet"){
        totalSettings.classList.add("warning");
      }
      else if(warningLevcallsTotallSetting.value <="criticalLevelSettin"){
        totalSettings.classList.add("danger");
      }
})
//add an event listener for when the add button is pressed
 //button.addEventListener('click',updateSettingsButton)
 



//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
