function AppleEater(name) {

  var applesEaten = 0;

  function eat() {
    applesEaten++;
  }

  function eaten() {
    return applesEaten;
  }

  function username() {
    return name;
  }

  return {
    eat,
    eaten,
    username
  }

}
describe('the Fruit Eater', function () {
      it('should return the fruit eaten', function () {
        var lindani = AppleEater('lindani');
        var shannon = AppleEater('shannon');

        assert.equal(lindani.eaten(), 0);
        assert.equal(shannon.eaten(), 0);

        assert.equal(lindani.username(), 'lindani');
        assert.equal(shannon.username(), 'shannon');

        lindani.eat();
        assert.equal(lindani.eaten(), 1);
        assert.equal(shannon.eaten(), 0);


      })});