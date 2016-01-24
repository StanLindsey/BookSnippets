Template.bookCardBig.helpers({
  authorName: function () {
    var authorName = Authors.findOne(this.authorId, {
      fields: {
        "firstName": 1,
        "lastName": 1
      }
    })
    return authorName.firstName + " " + authorName.lastName;
  }
});
