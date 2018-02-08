const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nesting records', function(){

   beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  }); //end of before each 

//Create tests
it('Creates an author with sub-documents', function(done){

 var ro = new Author({
   name: 'Roald Dahl',
   age: 70,
   books: [{title:'Wonderful story of Henry Sugar',pages: 180},{title:'Mr. Fantastic Fox', pages: 150}]
 });

 ro.save().then(function(){
    Author.findOne({name:'Roald Dahl'}).then(function(record){
        assert(record.pages.length === 1);
        done();
    });
 });

}); //end of it

it('Adds a book to the records', function(done){

  var ro = new Author({
    name: 'Roald Dahl',
    age: 70,
    books: [BooksSchema]
  });

  ro.save().then(function(){
    Author.findOne({name: 'Roald Dahl'}).then(function(record){
      record.books.push({title: 'The fighter pilot', pages: 200});
      record.save().then(function(){
             Author.findOne({name:'Roald Dahl'}).then(function(result){
               assert(result.books.length === 3);
               done();
             });
      });
    });
});

}); //End of 2nd it


}); //end of describe
