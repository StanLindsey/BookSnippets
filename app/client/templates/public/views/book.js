Template.bookPage.onCreated(function () {
  let self = this;
  var bookId = FlowRouter.getParam("_id");
  self.autorun(function () {
    self.subscribe('oneBook', bookId);
  });

});

Template.bookPage.helpers({
  book: function () {
    var bookId = FlowRouter.getParam("_id");
    return Books.findOne(bookId);
  },
  authorName: function () {
    var bookId = FlowRouter.getParam("_id");
    var authorId = Books.findOne(bookId).authorId;
    if (authorId) {
      let author = Authors.findOne(authorId);
      return author.firstName + " " + author.lastName;
    }
  },
  author: function () {
    var bookId = FlowRouter.getParam("_id");
    var authorId = Books.findOne(bookId).authorId;
    let author = Authors.findOne(authorId);
    return author;

  }
});
