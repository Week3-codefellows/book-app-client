'use strict'

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide()
    $('.book-view').show()
    $('#book-list').empty()
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')));
  }

  bookView.initDetailPage = function() {
    $('.container').hide()
    $('.detail-view').show()
    $('#detail-desc').empty()
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-detail-template')));
  }

  bookView.initFormPage = function() {
    $('.container').hide()
    $('.create-view').show();
    $('.create-book').on('submit', function(e) {
      e.preventDefault();
      let newBook = {
        title: e.target.title.value,
        author: e.target.author.value,
        isbn: e.target.isbn.value,
        image_url: e.target.image_url.value,
        description: e.target.description.value,
      }
      app.Book.create(newBook);
      console.log(newBook);
    })
  }

  module.bookView = bookView;
})(app)