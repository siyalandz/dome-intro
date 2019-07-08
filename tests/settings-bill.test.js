
describe('Settings Bill Factory Functions', function (){
    var instance = SettingsBillFactory()
    it('should return the number call cost and sms when updated',function(){
       
        var newObj = {
            'callCost': 2.75,
            'smsCost': 0.65,
            'warningLevel': 30.00,
            'critical': 50.00
        };
        instance.updateSettingBill(newObj)
        instance.addTotalBill('call');
        var total = instance.getAllTotals();
       // console.log(total);
        assert.equal(total['total'], 2.75);
    }); 


    it('should return the colour orange when totalS reach the  warning level', function(){
        // var instance = SettingsBillFactory()
       var newObj1 = {
           'warningLevel': 30.00,
               'critical': 50.00
       }
       instance.updateSettingBill(newObj1)
           instance.addTotalBill('warningLevel')
           // console.log(warningLevel);
           assert.equal('warningLevel'[30.00])
   });

it('it should return the red color when totalS reach critical level is reached', function(){
    var newObj2 = {
        'warningLevel': 30.00,
            'critical': 50.00
    }
    instance.updateSettingBill(newObj2)
         instance.addTotalBill('critical')
        // console.log(warningLevel);
        assert.equal('critical'[50.00])  
})

}); 

