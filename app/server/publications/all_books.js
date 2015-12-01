Meteor.publish('allBooks', function () {
  return Books.find();
});
