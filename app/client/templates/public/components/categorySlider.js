Template.categorySlider.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('allBooks');
  });
});

Template.categorySlider.helpers({
  books: function () {
    return Books.find();
  }
});