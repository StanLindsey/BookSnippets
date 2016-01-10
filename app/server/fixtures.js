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

Categories.insert({
    title: "Adventure",
    description: "Adventure titles full of adventure",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Horror",
    description: "Horror titles full of horror",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Thriller",
    description: "Thriller titles full of Thriller",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Romance",
    description: "Romance",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Drama",
    description: "Drama titles full of Drama",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Historical",
    description: "Historical titles full of history",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Fantasy",
    description: "Fantasy titles full of Fantasy",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Crime",
    description: "Crime titles full of crime",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Humour",
    description: "Humour titles full of Humour",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Ghost",
    description: "ghost titles full of ghost",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Science-Fiction",
    description: "Science-Fiction titles full of Science-Fiction",
    inNav: true,
    frontpage: true,
    live: true
});

Categories.insert({
    title: "Childrens",
    description: "Childrens titles full of Childrens",
    inNav: true,
    frontpage: true,
    live: true
});