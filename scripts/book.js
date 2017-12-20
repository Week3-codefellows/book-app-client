'use strict'

var app = app || {};

(function(module) {
  var __API_URL__ = 'http://localhost:3000';
  // var __API_URL__ = 'https://cs-ea-booklist.herokuapp.com';

  function errorCallback(err) {
    console.error(err)
    module.errorView.initErrorPage(err)
  }

  function Book(BookObj) {
    Object.keys(BookObj).map(key => this[key] = BookObj[key])
  }

  Book.prototype.toHtml = function() {
    // let template = Handlebars.compile($('#book-list-template').text())
    // return template(this)
    return Handlebars.compile($('#book-list-template').text())(this)
  }
  console.log( __API_URL__);
  // debugger;
  Book.all = []
  Book.loadAll = rows => {
    Book.all = rows.sort((a, b) => a.title - b.title).map(book => new Book(book))
    console.log(Book.all);
  }
  
  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  }

  Book.fetchOne = callback =>
    $.get(`${__API_URL__}/api/v1/books/:id`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Book = Book
})(app)
