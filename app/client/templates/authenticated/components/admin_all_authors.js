Template.adminAllAuthors.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('allAuthors');
  });
});

Template.adminAllAuthors.helpers({
  categories: function () {
    return Authors.find();
  }
});
