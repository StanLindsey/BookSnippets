Template.home.onCreated(function() {
        const self = this;
        self.autorun(() => {
            self.subscribe('frontpageCategories');
        });
    }

)

Template.home.helpers({
    frontpageCategories() {
        return Categories.find({frontpage:true});
    }
})
