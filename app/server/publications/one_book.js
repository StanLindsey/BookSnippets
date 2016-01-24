Meteor.publish("oneBook", function (bookId) {
  check(bookId, String)
  var book = Books.find({_id: bookId});
  var authorId = book.fetch()[0].authorId;

  return [
    book,
    Authors.find({_id: authorId})
  ];

});