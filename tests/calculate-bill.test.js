describe('a function that calculate the phone bills ',function(){
    it('it should return the calls made ', function(){
        
        
       
        assert.equal(phoneBillFactory().addToBill("call"), 2.75)
        
        

    })

it('it should return the sms received', function(){
    assert.equal(phoneBillFactory().addToBill('sms'), 0.75)
})
it('it should return the total of sms and call recieved',function(){
    
    assert.equal(phoneBillFactory().addToBill('sms,sms,call'), 4.25)
})
it('should return orange when Totalbill reach the warningLevel', function(){
    assert.equal(phoneBillFactory().addToBill('sms,sms,sms,call,sms,sms,sms,call.sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,'), '38.75')
})
it('should return red when Totalbill reach Critical Level', function(){
    assert.equal(phoneBillFactory().addToBill('sms,sms,sms,call,sms,sms,sms,call.sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,sms,call,sms,sms,call,sms,sms,call,sms,sms,'), '51.50')
})








})


