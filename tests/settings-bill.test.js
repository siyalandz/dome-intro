
describe('Settings Bill Factory Functions', function (){
    var instance = SettingsBillFactory()
    it('should return the number call cost and sms when updated',function(){
       
        var newObj = {
            'callCost': 2.75,
            'smsCost': 0.65,
            'warningLevel': 30.00,
            'critical': 50.00
        };
        instance.upDateSettingBill(newObj)
        instance.addTotalBill('call');
        var total = instance.getAllTotals();
        console.log(total);
        assert.equal(total['total'], 2.75);
    }); 


    it('should return the colour orange when reach the  warning level', function(){
        // var instance = SettingsBillFactory()
       var newObj1 = {
           'warningLevel': 30.00,
               'critical': 50.00
       }
       instance.upDateSettingBill(newObj1)
           // instance.addTotalBill('warningLevel')
           // console.log(warningLevel);
           assert.equal()
   });

it('it should return the red color when reach critical level is reached', function(){
    var newObj2 = {
        'warningLevel': 30.00,
            'critical': 50.00
    }
    instance.upDateSettingBill(newObj2)
        // instance.addTotalBill('warningLevel')
        // console.log(warningLevel);
        assert.equal()  
})

}); 

