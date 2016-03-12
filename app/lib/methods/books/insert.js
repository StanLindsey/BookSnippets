Meteor.methods({
  insertBook: function(book) {
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
  },
  updateBook: function(_id, book) {
    check(_id, String);
    check(book, Object);
    console.log(_id)
    console.log(book)
    if (Meteor.userId()) {
      Books.update(_id, {$set:book});
    }
  },
  removeBook: function(_id){
    check(_id, String);
    if (Meteor.userId()) {
      Books.remove(_id);
    }
  }
});
