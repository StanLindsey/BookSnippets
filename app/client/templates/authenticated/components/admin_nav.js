Template.adminNav.helpers({
  createNew: function () {
    if (FlowRouter.current().path === "/admin") {
      return "Create New Book";
    } else if (FlowRouter.current().path === "/admin/authors") {
      return "Create New Author";
    } else if (FlowRouter.current().path === "/admin/categories") {
      return "Create New Category";
    }
  },
  createURL: function () {
    if (FlowRouter.current().path === "/admin") {
      return "/admin/create/book";
    } else if (FlowRouter.current().path === "/admin/authors") {
      return "/admin/create/author";
    } else if (FlowRouter.current().path === "/admin/categories") {
      return "/admin/create/category";
    }
  },

  booksIsActive: function () {
    if (FlowRouter.current().path === "/admin") {
      return "active";
    }
  },

  authorsIsActive: function() {
    if (FlowRouter.current().path === "/admin/authors") {
      return "active";
    }
  },

  categoriesIsActive: function() {
    if (FlowRouter.current().path === "/admin/categories") {
      return "active";
    }
  }
});
