Meteor.methods({
  snippetFile(_id) {
    check(_id, String);
    console.log(_id);
    console.log(Books.findOne({_id}).snippetURL);
    return Books.findOne({_id}).snippetURL;
  }
});