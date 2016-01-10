const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( "login" );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: "authenticated",
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( "/admin", {
  name: "admin",
  action() {
    BlazeLayout.render( "default", { yield: "admin" } );
  }
});

authenticatedRoutes.route( "/admin/authors", {
  name: "adminAuthors",
  action() {
    BlazeLayout.render( "default", { yield: "adminAuthors" } );
  }
});

authenticatedRoutes.route( "/admin/categories", {
  name: "adminCategories",
  action() {
    BlazeLayout.render( "default", { yield: "adminCategories" } );
  }
});

authenticatedRoutes.route( "/signup", {
  name: "signup",
  action() {
    BlazeLayout.render( "default", { yield: "signup" } );
  }
});

authenticatedRoutes.route( "/admin/create/book", {
  name: "adminCreateBook",
  action() {
    BlazeLayout.render( "default", { yield: "adminCreateBook" } );
  }
});

authenticatedRoutes.route( "/admin/categories", {
  name: "adminCategories",
  action() {
    BlazeLayout.render( "default", { yield: "adminCategories" } );
  }
});