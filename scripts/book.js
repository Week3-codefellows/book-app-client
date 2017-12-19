'use strict';

var app = {};
var __API_URL__ = 'http://localhost:3000';
//var __API_URL__ = 'https://cs-ea-booklist.herokuapp.com/';

(function(module) {
function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
};

Book.prototype.toHtml = function() {
    return Handlebars.compile ($('#book-template').text())(this);
};

Book.all = {};

Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

Book.fetchall = callback =>
    $.get(`${__API_URL__}/tasks`)
        .then(Book.loadAll)
        .then(callback)
        .catch(errorCallback);

module.Book = Book;
})(app);

$(function() {
    app.Book.fetchAll(app.bookView.initIndexPage);
});
