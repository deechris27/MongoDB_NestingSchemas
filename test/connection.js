const mongoose = require('mongoose');

before(function(done){

  mongoose.connect('mongodb://localhost/testc');

  mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks');
    done();
  }).on('error', function(error){
    console.log('Connection error ', error);
  });

});

//Drop the collection before each test
beforeEach(function(done){
  //drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});
