Template.bookPage.onCreated(function () {
  let self = this;
  var bookId = FlowRouter.getParam("_id");
  self.autorun(function () {
    self.subscribe('oneBook', bookId);
  });
});

Template.bookPage.onRendered(function () {
  let self = this;

  self.autorun(function () {
    Template.currentData(); // when changed
    var audio = self.$('#audio')[0];
    console.log('test');
    if (audio) {
      audio.load();
    }
  });
});

Template.bookPage.helpers({
  book: function () {
    var bookId = FlowRouter.getParam("_id");
    return Books.findOne(bookId);
  },
  authorName: function () {
    var bookId = FlowRouter.getParam("_id");
    var authorId = Books.findOne(bookId).authorId;
    if (authorId) {
      let author = Authors.findOne(authorId);
      return author.firstName + " " + author.lastName;
    }
  },
  author: function () {
    var bookId = FlowRouter.getParam("_id");
    var authorId = Books.findOne(bookId).authorId;
    let author = Authors.findOne(authorId);
    return author;

  }
});


 // function updateSource() {
 //        var audio = document.getElementById('audio');

 //        var source = document.getElementById('oggSource');
 //        source.src='audio/ogg/' + this.parentElement.getAttribute('data-value');

 //        audio.load(); //call this to just preload the audio without playing
 //        audio.play(); //call this to play the song right away
 //    }
