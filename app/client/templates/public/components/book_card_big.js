Template.bookCardBig.helpers({
    authorName() {

        const authorName = Authors.findOne(this.authorId, {
            fields: {
                "firstName": 1,
                "lastName": 1
            }
        })
        if (authorName !== undefined) {
            return `${authorName.firstName} ${authorName.lastName}`;
        }
    }
});
