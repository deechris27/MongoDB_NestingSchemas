const assert = require('assert');
const MarioChar = require('../models/mariochar');


//describe the tests
describe('Deleting records',function(){
var char;
beforeEach(function(done){

   char = new MarioChar({
    name: 'Mario',
    weight: 30
});
     char.save().then(function(){
       assert(!char.isNew);
       done();

  });

}); // end of before
  //create tests
it('delete one record from the database', function(done){
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
        done();
      });
    });
});

/* it('finds one record by ID from the database', function(done){
  MarioChar.findOne({_id: char._id}).then(function(result){
    assert(result._id.toString() === char._id.toString());
    done();
  });
}); */


});
