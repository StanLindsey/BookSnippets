Template.bookPage.onRendered(function() {
    let self = this;

    self.autorun(function() {
        const bookId = FlowRouter.getParam("_id") // when changed
        self.subscribe('oneBook', bookId);
        const audio = self.$('#audio');
        const subscriptionsReady = self.subscriptionsReady()
        if (subscriptionsReady) {
          audio.load();
        }

    });
});

Template.bookPage.helpers({
    book() {
        const bookId = FlowRouter.getParam("_id");
        return Books.findOne(bookId);
    },
    authorName() {
        const bookId = FlowRouter.getParam("_id");
        const authorId = Books.findOne(bookId).authorId;
        if (authorId) {
            const author = Authors.findOne(authorId);
            return author.firstName + " " + author.lastName;
        }
    },
    author() {
        const bookId = FlowRouter.getParam("_id");
        const authorId = Books.findOne(bookId).authorId;
        const author = Authors.findOne(authorId);
        return author;

    }
});