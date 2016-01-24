Template.adminCreateBook.helpers({
  author: Authors.find(),
  category: Categories.find()
});

Template.adminCreateBook.onRendered(function () {
$(".ui.checkbox").checkbox();
$("select.dropdown").dropdown();
let self = this;
  self.autorun(function () {
    self.subscribe('allAuthors');
  });
  self.autorun(function () {
    self.subscribe('allCategories');
  });

});

Template.adminCreateBook.events({
    "submit form": function(event){
      event.preventDefault();

      var categories = [];
      for (let i = 0; i<event.target.categories.selectedOptions.length; i++){
        categories.push(event.target.categories.selectedOptions[i].value);
      }

      var book = {
        title: event.target.title.value,
        shortDescription: event.target.shortDescription.value,
        description: event.target.description.value,
        categories: categories,
        authorId: event.target.author.value,
        publishDate: new Date(event.target.publishDate.value),
        addedDate: new Date(),
        frontCoverURL: event.target.frontCoverURL.value,
        snippetURL: event.target.snippetURL.value,
        amazonUKURL: event.target.amazonUKURL.value,
        editorsPicks: event.target.editorsPicks.checked,
        live: event.target.live.checked

      };
      console.log(book);

      Meteor.call("insertBook", book);
      FlowRouter.go('/admin');

    }
  });