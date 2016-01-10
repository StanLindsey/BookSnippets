Template.adminCreateAuthor.events({
    "submit form": function(event){
      event.preventDefault();
      var author = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        bio: event.target.bio.value,
        authorImageURL: event.target.authorImageUrl.value
      };
      console.log(author);
      Meteor.call("insertAuthor", author);
      FlowRouter.go('/admin/authors');
    }
  });