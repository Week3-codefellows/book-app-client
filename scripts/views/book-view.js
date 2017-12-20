'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = function (err) {
    $('.container').hide()
    $('.book-view').show()
    module.Book.all.map(book => $('#book-list').append(book.toHtml()))
  }

  module.bookView = bookView
})(app)

$(() => app.Book.fetchAll(app.bookView.initIndexPage))
$(function() {
 
  $('.container').hide()
})

function initHome() {
  $('.container').hide()
  $('#home').show()
}

function initOne(ctx) {
  console.log('ctx', ctx)
  $('.container').hide()
  $('#one').show()
}

function initTwo(ctx) {
  console.log('ctx', ctx)
  $('.container').hide()
  $('#two').show()
}

function initThree(ctx) {
  console.log('ctx', ctx)
  $('.container').hide()
  $('#three').show()
}