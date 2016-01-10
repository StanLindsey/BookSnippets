// Fixture data
if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'admin',
        email: 'admin@book-snippets.com',
        password: 'CutSnipSlice15',
        profile: {
        }
    });
}

if (Books.find().count() === 0) {

  Books.insert({
    title: "Splidge the Crag Flinger",
    shortDescription: "Splidge is a man who does lots of things, isn't it great.",
    author: "Richard Vobes",
    publishDate: new Date(),
    addedDate: new Date(),
    frontCoverURL: "covers/splidge.jpg",
    snippetURL: "snippets/unreliable-histories.mp3",
    amazonUKURL: "http://www.amazon.co.uk/Splidge-Cragflinger-The-Royal-Tournament-ebook/dp/B00MNSFUSE",
    editorsPicks: true,
    live: true
  });

  Books.insert({
    title: "Splodge the Crog Flogger",
    shortDescription: "Splodge is a man who does thing.",
    author: "Rochard Vibes",
    publishDate: new Date(),
    addedDate: new Date(),
    frontCoverURL: "covers/splidge.jpg",
    snippetURL: "snippets/unreliable-histories.mp3",
    amazonUKURL: "http://www.amazon.co.uk/Splidge-Cragflinger-The-Royal-Tournament-ebook/dp/B00MNSFUSE",
    editorsPicks: true,
    live: true
  });

  Books.insert({
    title: "1984",
    shortDescription: "Future is bad.",
    author: "George Orwell",
    publishDate: new Date(),
    addedDate: new Date(),
    frontCoverURL: "covers/splidge.jpg",
    snippetURL: "snippets/unreliable-histories.mp3",
    amazonUKURL: "http://www.amazon.co.uk/Splidge-Cragflinger-The-Royal-Tournament-ebook/dp/B00MNSFUSE",
    editorsPicks: true,
    live: true
  });

  Books.insert({
    title: "Of Mice & Men",
    shortDescription: "Mice eat people and people eat mic.",
    author: "Random Author",
    publishDate: new Date(),
    addedDate: new Date(),
    frontCoverURL: "covers/splidge.jpg",
    snippetURL: "snippets/unreliable-histories.mp3",
    amazonUKURL: "http://www.amazon.co.uk/Splidge-Cragflinger-The-Royal-Tournament-ebook/dp/B00MNSFUSE",
    editorsPicks: true,
    live: true
  });

  Books.insert({
    title: "Hollow Chocolate Bunnies",
    shortDescription: "Bunnies made of chocolate take over toy town",
    author: "Robert Rankin",
    publishDate: new Date(),
    addedDate: new Date(),
    frontCoverURL: "covers/splidge.jpg",
    snippetURL: "snippets/unreliable-histories.mp3",
    amazonUKURL: "http://www.amazon.co.uk/Splidge-Cragflinger-The-Royal-Tournament-ebook/dp/B00MNSFUSE",
    editorsPicks: false,
    live: true
  });

}