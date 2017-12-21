'use strict'

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/delete/:id', ctx => app.Book.destroy(ctx.params.id, app.bookView.initIndexPage));
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage));
page('/books', app.bookView.initFormPage);
page();