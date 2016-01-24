const publicRedirect = () => {
  if ( Meteor.userId() ) {
    FlowRouter.go( 'home' );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  //triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/', {
  name: 'home',
  action() {
    BlazeLayout.render( 'default', { yield: 'home' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});

publicRoutes.route( '/books/:_id', {
  name: 'book-page',
  action() {
    BlazeLayout.render( 'default', { yield: 'bookPage'} );
  }
});