Template.latestBooks.onCreated(function () {
  const self = this;
  self.autorun(() => {
    self.subscribe('allBooks');
  });
  self.autorun(() => {
    self.subscribe('allAuthors');
  });
});

Template.latestBooks.helpers({
  books() {
    return Books.find();
  },
  authorName() {
    const authorName = Authors.findOne(this.authorId, {fields: {'firstName':1, 'lastName':1}})
    return `${authorName.firstName} ${authorName.lastName}`;
  }
});