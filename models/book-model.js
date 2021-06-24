const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type : String,
    required: true
  },

  author : {
    type : String,
    required : true
  },

  genre : {
    type : String,
    required : true
  },

  read : {
    type : Boolean,
    default : false
  }
},
  {timestamps : true}
);

const Book = mongoose.model('book', BookSchema);
module.exports = Book;

