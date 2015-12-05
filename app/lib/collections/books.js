Books = new Meteor.Collection( 'books' );

Books.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Books.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let CollectionSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Title of the book"
  },
  "shortDescription": {
    type: String,
    label: "Book short description"
  },
  "description": {
    type: String,
    label: "Book description",
    optional: true
  },
  "author": {
    type: String,
    label: "Author Name"
  },
  "authorID": {
    type: String,
    label: "Author ID",
    optional: true
  },
  "publishDate": {
    type: Date,
    label: "Date Book published",
  },
  "addedDate": {
    type: Date,
    label: "Date Book Added",
  },
  "frontCoverURL": {
    type: String,
    label: "URL for front cover image"
  },
  "snippetURL": {
    type: String,
    label: "URL for snippet audio"
  },
  "amazonURL": {
    type: String,
    label: "Amazon purchase URL"
  },
  "editorsPicks": {
    type: Boolean,
    label: "Is on front page?",
    optional: true
  },
  "live": {
    type: Boolean,
    label: "Is the book live on the site yet"
  }



});

Books.attachSchema( CollectionSchema );
