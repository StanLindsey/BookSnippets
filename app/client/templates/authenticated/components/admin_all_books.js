Template.adminAllBooks.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('allBooks');
  });
});

Template.adminAllBooks.helpers({
  books: function () {
    return Books.find();
  }
});
