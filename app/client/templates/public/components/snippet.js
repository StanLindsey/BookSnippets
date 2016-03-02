// Template.snippet.onCreated(function() {
//     this.snippetFile = new ReactiveVar({});
//     const instance = Template.instance();
//     Meteor.call('snippetFile', instance.data._id, (err, res) => {
//         console.log(res);
//         instance.snippetFile.set(res);
//     });
// });



Template.snippet.helpers({
      snippetURL() {

      }
    // snippetFile() {
    //     const audio = document.getElementById('audio');
    //     const snippetURL = Template.instance().snippetFile.get();
    //     source.src = 'snippetURL';
    //     audio.load();


    //     //return Template.instance().snippetFile.get();
    // }
});
