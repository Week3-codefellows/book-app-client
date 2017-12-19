$(function() {
    app.Book.fetchAll(app.bookView.initIndexPage);
  })
  
  bookView.initIndexPage = function() {
      $('.container').hide();
      $('.book-view').show();
      app.Book.all.map(book => {
        $('#book-list').append(book.toHtml())
      });
    };