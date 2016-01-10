Meteor.methods({
  insertAuthor: function (author)  {
    console.log(author);
    check(author, Object);
    var currentUserId = Meteor.userId();
    if (currentUserId) {
      try {
        var documentId = Authors.insert(author);
        return documentId;
      } catch (exception) {
        return exception;
      }
    }
  }
});
