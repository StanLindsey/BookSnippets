Template.adminEditBook.onRendered(function() {
  let self = this;
  self.autorun(function() {
    self.subscribe('allAuthors');
    self.subscribe('allCategories');
    const bookId = FlowRouter.getParam("_id"); // when changed
    self.subscribe('oneBook', bookId);
    setTimeout(() => {
      $(".ui.checkbox").checkbox();
      $("select.dropdown").dropdown();
    }, 500)

  });
});


Template.adminEditBook.helpers({
  author: Authors.find(),
  category: Categories.find(),
  book() {
    const bookId = FlowRouter.getParam("_id");
    return Books.findOne(bookId);
  },
  publishDate(){
    const bookId = FlowRouter.getParam("_id");
    const date = Books.findOne(bookId).publishDate;
    return date.toISOString().slice(0,10).replace(/-/g,"-");
  },
  categorySelected(){
    const bookId = FlowRouter.getParam("_id");
    const categories = Books.findOne(bookId).categories;
    if (categories.indexOf(this.title) > -1) {
      return 'selected';
    }
  },
  editorPicksChecked() {
    const bookId = FlowRouter.getParam("_id");
    if (Books.findOne(bookId).editorsPicks) {
    return 'checked';
    }
  },
  liveChecked() {
    const bookId = FlowRouter.getParam("_id");
    if (Books.findOne(bookId).live) {
      return 'checked';
    }
  }
});

Template.adminEditBook.events({
  "click input[name=submit]": function(event) {
    event.preventDefault();

    var categories = [];
    for (let i = 0; i < event.target.categories.selectedOptions.length; i++) {
      categories.push(event.target.categories.selectedOptions[i].text);
    }
    var book = {
      title: event.target.title.value,
      shortDescription: event.target.shortDescription.value,
      description: event.target.description.value,
      categories: categories,
      authorId: event.target.author.value,
      publishDate: new Date(event.target.publishDate.value),
      frontCoverURL: event.target.frontCoverURL.value,
      snippetURL: event.target.snippetURL.value,
      amazonUKURL: event.target.amazonUKURL.value,
      editorsPicks: event.target.editorsPicks.checked,
      live: event.target.live.checked

    };
    const _id = FlowRouter.getParam("_id");
    Meteor.call("updateBook", _id, book);
    FlowRouter.go('/admin');

  },
  "click input[name=delete]": function(event) {
    const _id = FlowRouter.getParam("_id");
    Meteor.call("removeBook", _id);
    FlowRouter.go('/admin');
  }
});
