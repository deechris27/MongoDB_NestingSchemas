const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Increment a record in a db', function(){
  var char;
beforeEach(function(done){
  char = MarioChar({
    name: 'Luigi',
    weight: 25
  });

   char.save().then(function(){
     done();
   });

    }); //end of beforeEach

 it('Increments a record in a DATAbase', function(done){
   MarioChar.update({},{$inc:{weight: 1}}).then(function(){
     MarioChar.findOne({name:'Luigi'}).then(function(record){
       assert(record.weight === 26);
       done();
     });
   });
 }); //end of It

}); // end of describe
