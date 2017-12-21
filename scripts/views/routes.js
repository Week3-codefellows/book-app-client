'use strict'

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/delete/:id', ctx => app.Book.destroy(ctx.params.id));
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage));
page('/books', app.bookView.initFormPage);
page();