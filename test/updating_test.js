const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Updating database',function(){

 var char;
 beforeEach(function(done){
   char = new MarioChar({
     name: 'Mario',
     weight: 50
   });


 char.save().then(function(){
   assert(char.isNew === false);
   done();
   });

});

it('updates one record to the database', function(done){
      MarioChar.findOneAndUpdate({name: 'Mario'},{name:'Luigi'}).then(function(){
        MarioChar.findOne({_id: char._id}).then(function(result){
          assert(result.name === 'Luigi');
          done();
        });
      });

});
});
