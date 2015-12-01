Template.editorsPicks.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('editorsPicks');
  });
});

Template.editorsPicks.helpers({
  editorsPicks: function () {
    return Books.find({editorsPicks: true}, {limit: 3});
  }
});
