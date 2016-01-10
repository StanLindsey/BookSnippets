Meteor.methods({
  insertBook: function (book)  {
    check(book, Object);
    var currentUserId = Meteor.userId();
    if (currentUserId) {
      try {
        var documentId = Books.insert(book);
        return documentId;
      } catch (exception) {
        return exception;
      }
    }
  }
});
