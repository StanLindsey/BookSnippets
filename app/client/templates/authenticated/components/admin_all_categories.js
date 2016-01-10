Template.adminAllCategories.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('allCategories');
  });
});

Template.adminAllCategories.helpers({
  categories: function () {
    return Categories.find();
  }
});
