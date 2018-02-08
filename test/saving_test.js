const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe the tests
describe('Saving some records', function(){

//create tests
   it('Saves a record to the database', function(done){
    const char = new MarioChar({
      name: 'Mario',
      weight: 34
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });
   });
}); //End of describe
