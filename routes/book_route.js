const express = require('express');
const Book = require("../models/book-model");
const mongoose = require('mongoose');
const router = express.Router();

// Adding a Book to the Database Using a POST request
router.post('/addbooks', (req, res) => {
  console.log(req.body);
  const book = new Book(req.body);

  book.save()
  .then((result) => res.status(201).json({ message : book}))
  .catch((err) => console.log(err));
});

// Viewing all the books in the Bookshop
router.get('/viewbooks', (req, res) => {
  Book.find((err, books)=> {
    if(err) {
      return res.send(err)
    }
      return res.json(books);
  });
});

// viewing a specific book
router.get('/viewbooks/:id', (req,res) => {
  Book.findById(req.params.id, (err, books) => {
    if(err) {
      return res.send(err)
    }
      return res.json(books);
  });
});

//Setting up the Put request
router.put((req, res) => {
  Book.findById(req.params.id, (err, books) => {
    if(err) {
      return res.send(err)
    }
    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;
    book.read = req.body.read;
    book.save();
    return res.json(book);
  });
});

module.exports = router;