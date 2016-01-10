Template.admin.helpers({
  books: function () {
    if (FlowRouter.current().path === "/admin") {
      return true;
    }
  },
  authors: function () {
    if (FlowRouter.current().path === "/admin/authors") {
      return true;
    }
  },
  categories: function () {
    if (FlowRouter.current().path === "/admin/categories") {
      return true;
    }
  }
});