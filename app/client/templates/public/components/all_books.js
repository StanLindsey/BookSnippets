Template.allBooks.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('allBooks');
  });
});

Template.allBooks.helpers({
  books: function () {
    return Books.find();
  }
});
