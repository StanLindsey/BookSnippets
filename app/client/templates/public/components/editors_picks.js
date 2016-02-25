Template.editorsPicks.onCreated(function () {
  const self = this;
  self.autorun(() => {
    self.subscribe('editorsPicks');
  });
});

Template.editorsPicks.helpers({
  editorsPicks() {
    return Books.find({editorsPicks: true}, {limit: 3});
  }
});