Meteor.publish("allAuthors", function () {
  return Authors.find();
});
