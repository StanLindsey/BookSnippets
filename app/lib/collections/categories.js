Categories = new Meteor.Collection( 'categories' );

Categories.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Categories.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let CollectionSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Category Title"
  },

  "description": {
    type: String,
    label: "Category Description"
  },

  "inNav": {
    type: Boolean,
    label: "Is it in the navigation menu?"
  },

  "frontPage": {
    type: Boolean,
    label: "Is it on the front page?"
  }

});

Categories.attachSchema( CollectionSchema );
