Template.categorySlider.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('allBooks');
  });
  self.autorun(function () {
    self.subscribe('allAuthors');
  });
});

Template.categorySlider.helpers({
  books: function () {
    return Books.find();
  },
  authorName: function () {
    var authorName = Authors.findOne(this.authorID, {fields: {'firstName':1, 'lastName':1}})
    return authorName.firstName + " " + authorName.lastName;
  }
});