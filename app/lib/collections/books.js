Books = new Mongo.Collection( 'books' );

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
    label: "Book short description",
    optional: true
  },
  "description": {
    type: String,
    label: "Book description",
    optional: true
  },
  "categories": {
    type: [String],
    label: "Array of categories",
    optional: true
  },
  "author": {
    type: String,
    label: "Author name",
    optional: true
  },
  "authorId": {
    type: String,
    label: "Author ID",
    optional: true
  },
  "publishDate": {
    type: Date,
    label: "Date Book published",
    optional: true
  },
  "addedDate": {
    type: Date,
    label: "Date Book Added",
    optional: true
  },
  "frontCoverURL": {
    type: String,
    label: "URL for front cover image",
    optional: true
  },
  "snippetURL": {
    type: String,
    label: "URL for snippet audio",
    optional: true
  },
  "amazonUKURL": {
    type: String,
    label: "Amazon purchase URL",
    optional: true
  },
  "editorsPicks": {
    type: Boolean,
    label: "Is on front page?"
  },
  "live": {
    type: Boolean,
    label: "Is the book live on the site yet"
  }



});

Books.attachSchema( CollectionSchema );
