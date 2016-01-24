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
    return Books.find({},{limit:5});
  }
  ,
  authorName: function () {
    var authorName = Authors.findOne(this.authorId, {fields: {'firstName':1, 'lastName':1}})
    if (authorName){
      return authorName.firstName + " " + authorName.lastName;
    }
  }
});