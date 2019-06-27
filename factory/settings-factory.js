function SettingsBillFactory() {
    var callsTotalSttng = 0;
    var smsTotalSttng = 0;
    var totalS = 0;
    var updateObj = {};

    function addTotalBill(billType) {
        if (billType === 'call') {
            callsTotalSttng += Number(updateObj['callCost'])
        } else if (billType === 'sms') {
            smsTotalSttng += Number(updateObj['smsCost'])
        }
        totalS = callsTotalSttng + smsTotalSttng;
    };

    function upDateSettingBill(updateValues) {
        console.log(updateValues);
        updateObj = updateValues;
        console.log(updateObj);
    };

    function changeColor() {
        //check if total is between warning and critical
        if (totalS >= updateObj['warningLevel'] && totalS < updateObj['criticalLevel']) {
            return 'warning';
        }
        // check if toatal exceeds critical
        else if (totalS >= updateObj['criticalLevel']) {
            return 'danger';
        }

    };


    function getAllTotals() {
        return {
            'calls': callsTotalSttng,
            'smss': smsTotalSttng,
            'total': Number(totalS)
        };
    }

    return {
       addTotalBill,
        upDateSettingBill,
        changeColor,
        getAllTotals
    };
}