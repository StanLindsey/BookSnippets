Meteor.publish("editorsPicks", function () {
  return Books.find({editorsPicks: true});
});
