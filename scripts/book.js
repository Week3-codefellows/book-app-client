'use strict';

var app = {};
var __API_URL__ = 'http://localhost:3000';

function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
};

Book.prototype.toHtml = function() {
    return Handlebars.compile ($('#book-template').text())(this);
};
