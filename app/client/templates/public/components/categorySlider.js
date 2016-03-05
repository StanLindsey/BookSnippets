Template.categorySlider.onCreated(function() {
    const self = this;
    self.autorun(() => {
        self.subscribe('allBooks');
    });
    self.autorun(() => {
        self.subscribe('allAuthors');
    });
});

Template.categorySlider.helpers({
    categoryName(category){
      return category
    },
    books(category) {
        return Books.find({categories: category}, { limit: 5 });
    },
    authorName() {
        const authorName = Authors.findOne(this.authorId, { fields: { 'firstName': 1, 'lastName': 1 } })
        if (authorName) {
            return `${authorName.firstName} ${authorName.lastName}`;
        }
    }
});
