Meteor.publish("allCategories", () => {
    return Categories.find();
});

Meteor.publish("frontpageCategories", () => {
    return Categories.find({ frontpage: true });
});
