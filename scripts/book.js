'use strict'

var app = app || {};

(function(module) {

  var __API_URL__ = 'http://localhost:3000';
  // var __API_URL__ = 'https://ea-cs-booklist.herokuapp.com';

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorView(err);
  }

  function Book(BookObj) {
    Object.keys(BookObj).map(key => this[key] = BookObj[key]);
  }

  Book.prototype.toHtml = function(templateId) {
    return Handlebars.compile($(`#${templateId}`).text())(this);
  }

  Book.all = []
  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

  Book.fetchOne = (id, callback) =>
    $.get(`${__API_URL__}/api/v1/books/${id}`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  Book.create = newBook =>
    $.post(`${__API_URL__}/api/v1/books`, newBook)
      .then(() => page('/'))
      .catch(errorCallback);

  Book.update = (book, id) =>
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${id}`,
      method: 'PUT',
      data: book,
    })
      .then(() => page('/'))
      .catch(module.errorView.initErrorView)
  
  Book.destroy = function(id) {
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${id}`,
      method: 'DELETE',
    })
      .then(() => page('/'))
      .catch(module.errorView.initErrorView)
  }

  module.Book = Book;
})(app);