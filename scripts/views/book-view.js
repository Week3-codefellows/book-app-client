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
    $('.delete-button').on('click', 'button', function() {
      module.Book.destroy($(this).data('bookid'))
    })
<<<<<<< HEAD
 
=======
    $('.update-button').on('click', 'button', function() {
      module.Book.fetchOne($(this).data('bookid'), module.bookView.initUpdatePage)
    })
>>>>>>> 6d77cb3e0da107a15e3a13c3151d24b546d0fc49
  }
  bookView.initUpdatePage = function(){
    $('.container').hide()
    $('.update-book').show();
    $('.update-button').on('click', 'button', function() {
     
      $(document).ready(function(){
        let isbn = "{{isbn}}";
        
      
        $("#isbn").text(isbn+''); 
        
      })
  
       $('#isbn').val('').replaceWith( $input );
  
  
  })

<<<<<<< HEAD
  }
=======
  bookView.initUpdatePage = function() {
    $('.container').hide()
    $('.update-view').show()
    $('#update-list').empty()
    module.Book.all.map(book => $('#update-desc').append(book.toHtml('book-update-template')));
  }

>>>>>>> 6d77cb3e0da107a15e3a13c3151d24b546d0fc49
  bookView.initFormPage = function() {
    $('.container').hide()
    $('.create-view').show();
    $('.create-book').one('submit', function(e) {
      e.preventDefault();
      let newBook = {
        title: e.target.title.value,
        author: e.target.author.value,
        isbn: e.target.isbn.value,
        image_url: e.target.image_url.value,
        description: e.target.description.value,
      }
      app.Book.create(newBook);
      $('.input-create').val('');
    })
  }
  module.bookView = bookView;
})(app)