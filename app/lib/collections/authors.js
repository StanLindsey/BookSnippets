Authors = new Meteor.Collection( 'authors' );

Authors.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Authors.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let CollectionSchema = new SimpleSchema({
  "firstName": {
    type: String,
    label: "Authors First Name"
  },
  "lastName": {
    type: String,
    label: "Authors Last Name",
  },
  "bio": {
    type: String,
    label: "Author Bio",
    optional: true
  },
  "authorImageURL": {
    type: String,
    label: "Author Image URL",
    optional: true
  }


});

Authors.attachSchema( CollectionSchema );
