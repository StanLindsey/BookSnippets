// Fixture data
if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: 'admin',
    email: 'admin@book-snippets.com',
    password: 'CutSnipSlice15',
    profile: {}
  });
}

if (Authors.find().count() === 0) {
  var vobes = Authors.insert({
    firstName: "Richard",
    lastName: "Vobes"
  });
  var tidman = Authors.insert({
    firstName: "Evelyn",
    lastName: "Tidman"
  });
  var ellis = Authors.insert({
    firstName: "Ben",
    lastName: "Ellis"
  });
  var curwood = Authors.insert({
    firstName: "Phillip",
    lastName: "D Curwood"
  });
  var wingfield = Authors.insert({
    firstName: "Robert",
    lastName: "Wingfield"
  });
  var ford = Authors.insert({
    firstName: "Jeanette",
    lastName: "Taylor Ford"
  });
  var lawson = Authors.insert({
    firstName: "JW",
    lastName: "Lawson"
  });
  var evans = Authors.insert({
    firstName: "Jemahl",
    lastName: "Evans"
  });
  var may = Authors.insert({
    firstName: "CR",
    lastName: "May"
  });
  var elliott = Authors.insert({
    firstName: "Lucinda",
    lastName: "Elliott"
  });
  var housden = Authors.insert({
    firstName: "Elizabeth",
    lastName: "Housden",
    authorImageURL: "authors/elizabethhouseden.jpg",
    bio: "<p>Elizabeth Housden is a professional British actress, who started writing firstly plays for her theatre company and then branching out to write novels for children and later for adults as well. Her play written for television&iacute;s Big Arts Week, The Jade King and the Animals of Destiny, for which she won an award - the only piece of drama in the Big Arts Week programme to be chosen from 1,400 entries as the only one televised - has been highly acclaimed and performed all over the world. She has now adapted the play as a novel for children under the same title. It is the re-telling of the myth behind the formation of the Chinese Zodiac and is published by Shimran.  She is currently writing novels for adults and her first historical novel, The Gentlemen Go By, set in the late 18th century on the Isle of Wight where she grew up, has recently been accepted alongside The Jade King, for presentation at the Dubai International Writers Centre. She has long maintained that her professional training as an actress has been invaluable in helping create believeable characters and that is the subject of her talk.  As well as running her own theatre company for the past 14 years she taught drama at Bedales School and she continues to be a mentor to many of her former pupils who have gone on to be professional actors. She lectures on theatre and its superstitions and is positively evangelical in getting young people to understand and fall in love with Shakespeare. She and her husband live in Hampshire and in London and together they have four children, two sons and two daughters, and six grandchildren. </p>"
  });
}

if (Books.find().count() === 0) {

  // For The King
  Books.insert({
    title: "The Gentlemen Go By",
    shortDescription: "The year is 1788, the year before the French Revolution.  In Paris the mood against the king and the aristocrats is becoming increasingly ugly.",
    description: "<p>The year is 1788, the year before the French Revolution. In Paris the mood against the king and the aristocrats is becoming increasingly ugly. Across the Channel, in London, the nineteen year old orphan, socialite Lady Sophia Catesby, is left alone when her step-father, Edward, Earl of Roxford, is killed fighting for his country in a foreign war. Yet she is not to be too much pitied as he has left her a fortune. But also there is a stipulation...   Until she inherits the money at the age of twenty-one, she is to leave London and reside with a guardian. That guardian is his best friend and first cousin, Jacques, Marquis de St Aubin, a man she has barely heard of and never met. Despairing, angry and frustrated, Sophia knows she must obey. She knows she will despise him and find this unknown bachelor, a contemporary of Edward's, dull and tedious. But who really is Jacques?   Sophia has much to learn of Jacques and also about the reasons behind this en-forced exile. But unbeknownst to her danger is lurking in the shape of her loathed uncle William, a spendthrift, a snob and a bully and now the new Earl of Roxford. And Edward has placed another proviso, one perhaps he shouldn't have for it has made William a very dangerous man indeed. But to begin with neither she, nor Jacques have yet realised it...</p>",
    authorId: housden,
    publishDate: new Date("2014-12-08"),
    addedDate: new Date(),
    frontCoverURL: "covers/thegentlemengoby.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/thegentlemengoby.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B00PFZQ0HM/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00PFZQ0HM&linkCode=as2&tag=booksnip-21",
    editorsPicks: false,
    live: true
  });

  Books.insert({
    title: "Splidge the Crag Flinger",
    shortDescription: "Splidge is a man who does lots of things, isn't it great.",
    authorId: vobes,
    publishDate: new Date(),
    addedDate: new Date(),
    frontCoverURL: "covers/splidge.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/splidge1.mp3",
    amazonUKURL: "http://www.amazon.co.uk/Splidge-Cragflinger-The-Royal-Tournament-ebook/dp/B00MNSFUSE",
    editorsPicks: false,
    live: true
  });

  // For The King
  Books.insert({
    title: "For The King",
    shortDescription: "The English Civil War puts Englishman against Englishman, Cavalier against Puritan, Royalist against Parliamentarian.",
    description: "<p>Swashbuckling adventure by the author of GENTLEMAN OF FORTUNE and ONE SMALL CANDLE.</p>The English Civil War puts Englishman against Englishman, Cavalier against Puritan, Royalist against Parliamentarian. East Anglia lies firmly in the control of Parliament—or so they think. When King’s Lynn in Norfolk, under governor Sir Hamon L’Estrange, declares for the King, Parliament reacts by sending Lord Manchester, Oliver Cromwell and 18,000 troops to retake it. Can Sir Hamon and his sons hold Lynn until help arrives? Can they keep King’s Lynn for the King? Roger L’Estrange, son of Sir Hamon, fights for the town and for the King. Yet his heart is captured by beautiful Puritan Ruth Pell. Can they overcome their differences in allegiance? Can their love survive the siege?",
    authorId: tidman,
    publishDate: new Date("2014-12-08"),
    addedDate: new Date(),
    frontCoverURL: "covers/fortheking.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/fortheking.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B00PFZQ0HM/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00PFZQ0HM&linkCode=as2&tag=booksnip-21",
    editorsPicks: true,
    live: true
  });

  // In A Right State

  Books.insert({
    title: "In A Right State",
    shortDescription: "Your information is being sold. And guess who's paying for it?",
    description: "It's 2066, and living in a country where big corporations are constantly undressing you with their spies isn't much fun for Duncan. He remembers the days when information was protected, not sold to the highest bidder. When his illegal organic vegetable trade is discovered at the bottom of his garden in the town of Wigthorn, the tomatoes really hit the fan. Amy works for Pharmara, the biggest pharmaceutical company in the UK, analysing user data. Yes, it's as boring as it sounds but she believes a little corporate access to personal information is a small price to pay to live in a post-tax, post-carbon, post-poverty world. After all, if you've got nothing to hide, you've got nothing to fear ... right? Poppy lives in Shaded Vale, a town rich enough to stay off the radar. Her father has some big plans to shake up the industrial power balance. Thrown together by circumstance, Duncan, Amy and Poppy become tangled in a dangerous quest for truth with Pharmara Security hot on their heels. But if knowledge is power, how is it that those in power are such idiots?",
    authorId: ellis,
    publishDate: new Date("2014-11-13"),
    addedDate: new Date(),
    frontCoverURL: "covers/inarightstate.jpg",
    snippetURL: "snippets/inarightstate.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B00LET3E8Q/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00LET3E8Q&linkCode=as2&tag=booksnip-21",
    editorsPicks: true,
    live: true
  });


  // Arabella – A Picture of Beauty

  Books.insert({
    title: "Arabella - A Picture of Beauty",
    shortDescription: "A ghost story",
    description: "Nathan Rothwell is a renowned crime fiction writer, famous not just for his ‘Detective John Ranger’ novels, but also for his irresponsible hedonistic lifestyle. At his friend and agent’s house he stumbles across a portrait of a beauty from Lytefoot Hall some 200 years ago, the beguiling Lady Arabella. For reasons beyond him, he becomes infatuated with her and when he finds himself house-sitting at the Hall, begins to leave his old world behind and attempts to start writing a romantic novel about her. The Hall has other ideas and the very first night he is drawn into a ghostly mystery by a haunting melody. He seeks help in the form of a psychic, but is she all she seems to be, and is she all part of the horrible scenario? He finds himself dragged down into the lives of the spectres of the past, never forgetting, never forgiving. The mansion carries awful memories, memories that intertwine with Nathan’s life in a way to make him fall hopelessly in love with the ghost of Arabella and put his life at risk. His love for her is to come at a terrible price...",
    authorId: curwood,
    publishDate: new Date("2015-07-15"),
    addedDate: new Date(),
    frontCoverURL: "covers/arabella.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/arabella.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B011R8VHSM/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B011R8VHSM&linkCode=as2&tag=booksnip-21",
    editorsPicks: false,
    live: true
  });


  // Into The Fourth Universe

  Books.insert({
    title: "Into The Fourth Universe",
    shortDescription: "Probably the bawdiest and most scathing lampoon of science fiction and big business ever written.",
    description: "Probably the bawdiest and most scathing lampoon of science fiction and big business ever written. Tom is catapulted into a chaotic world where bureaucracy and process have taken over from all reason. Good management techniques, intellectual capital and profit have been totally ignored in order to perpetuate an organisational structure. Nobody knows what the company actually does, and Tom, now in charge, is given the biggest challenge to find out. Add into this multiple attempts on his life, his quest to find true love, an investigation into a murder without a victim, the first rule of being a private investigator, and the impending total collapse of four universes, and we have a tangled knot that even Alexander the Great would have trouble cutting through. Tom has to do something, otherwise it will be the end of everything he knows, and quite a few bits he doesn't know about. This is not beep-beep science fiction but a sarcastic lusty romp through everything wrong with business and life today, neatly wrapped up in a bit of sci-fi and interconnected adventures. Adults only, and only those who are not easily offended!",
    authorId: wingfield,
    publishDate: new Date("2013-08-29"),
    addedDate: new Date(),
    frontCoverURL: "covers/intothefourthuniverse.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/fourth-universe.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B00ESJDQQO/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00ESJDQQO&linkCode=as2&tag=booksnip-21",
    editorsPicks: false,
    live: true
  });


  // The Sixpenny Tiger

  Books.insert({
    title: "The Sixpenny Tiger",
    shortDescription: "When Sally Golding achieves her dream job, to work caring for children in a 'home', she becomes deeply involved with the children.",
    description: "When Sally Golding achieves her dream job, to work caring for children in a 'home', she becomes deeply involved with the children. One in particular, Davey, touches her heart. The older brother to John, he is often blamed for John's misdeeds by his housemother, Marjorie, who seems to have taken a great dislike to him. Davey's problems become much worse when Marjorie marries his father, Tony Adams and the boys go home to live with them. Marjorie subjects Davey to violent abuse; Davey dreams of finding Sally and her becoming his mother. But Sally has problems of her own. Now in an abusive marriage, she needs all her strength to cope. And Joe, who is in love with Sally, is struggling to keep his life together having lost her to Evan, her husband. However, fate has things in store for all of them. Will Davey manage to escape from his personal hell? Will Joe finally achieve his dream to be with Sally? And what of Marjorie - what is it that happened in her life to make her the way she is with Davey? This story shows the great power of love - and that of forgiveness.",
    authorId: ford,
    publishDate: new Date("2015-08-30"),
    addedDate: new Date(),
    frontCoverURL: "covers/thesixpennytiger.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/sixpennytiger.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B014QC2SHA/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B014QC2SHA&linkCode=as2&tag=booksnip-21",
    editorsPicks: false,
    live: true
  });

  // Mummy’s Little Angel

  Books.insert({
    title: "Mummy’s Little Angel",
    shortDescription: "Joanne didn’t believe that her life could become worse than it already was. She had lost everybody and everything she had loved.",
    description: "Joanne didn’t believe that her life could become worse than it already was. She had lost everybody and everything she had loved. She was alone. Surely she had suffered enough? The press had called her identical twins psychopaths. Her Maggie. Her Annie. But she still loved them, even though one of them had killed her husband, Jeff. Joanne believed that his murder had been an accident. How could one of her girls be a murderer? She knew them better than anybody else. They were good girls really. She just had to prove it. The brutal murder of her god-daughter Laura had never been solved. Items had been missing when Laura’s remains had been discovered: clues that could lead to the capture of her killer. One of them was Laura’s doll … the doll that Joanne later discovered in her home. Joanne is facing the most horrific dilemma of her life. Has the wrong woman been imprisoned? Could her child have used such brutality against her best friend? Or could both women be innocent after all? She needs to find somebody for her daughter to confide in; somebody she will trust. She needs a miracle. There is only one person who can help. He is compassionate and caring, with an amazing ability to gain the trust of the most difficult patients. He is Joanne’s only hope. He is Jonathan Davies.",
    authorId: lawson,
    publishDate: new Date("2015-08-31"),
    addedDate: new Date(),
    frontCoverURL: "covers/mummyslittleangel.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/mummyslittleangel.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B014P83JCI/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B014P83JCI&linkCode=as2&tag=booksnip-21",
    editorsPicks: false,
    live: true
  });

  // The Last Roundhead

  Books.insert({
    title: "The Last Roundhead",
    shortDescription: "They say I am the last of them alive; they say I am the last roundhead.",
    description: "They say I am the last of them alive; they say I am the last roundhead. Ancestor to Colonel Blimp, Sir Blandford Candy is an irascible old drunk with a hatred of poets and a love of hats. After an argument with his new neighbour Alexander Pope, he looks back on his life and the start of the Civil War.Young Blandford sets off for London following an illicit affair with his brother's betrothed and joins the army to fight the King, taking part in the battles of Edgehill and Turnham Green.As he bounces from battlefield to bedroom, Blandford unmasks Cavalier plots, earns the enmity of the King's agents and uncovers an attempt to steal thousands. All whilst dealing with murderous brothers, scheming sisters and puritan displeasure.Flashman meets the Three Musketeers in a picaresque romp through Stuart England at its nadir/through the Civil War.",
    authorId: evans,
    publishDate: new Date("2015-08-01"),
    addedDate: new Date(),
    frontCoverURL: "covers/thelastroundhead.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/lastroundhead.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B0120S7AL6/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B0120S7AL6&linkCode=as2&tag=booksnip-21",
    editorsPicks: false,
    live: true
  });

  // Terror Gallicus

  Books.insert({
    title: "Terror Gallicus",
    shortDescription: "The titanic struggle begins in an unremarkable grove in the lands of an unremarkable tribe.",
    description: "The titanic struggle begins in an unremarkable grove in the lands of an unremarkable tribe. The war which follows will last for centuries and shapes us still. 390 BC - A Greek trader embarks on his fifth journey to the forests of Hyperborea on behalf of his shadowy employer: and disappears. Led by Brennus, a warlord without a past, a warrior of the Horsetails clan accompanies his tribe on an extraordinary trek through the wild Celtic lands. Eighty thousand strong they cross the Alps and fall upon the rich lands of Italia. On an island at the edge of the known world, a young druid is driven by her night terrors to embark on a quest which will finally reveal the path the gods have chosen for her. A general of Rome, conqueror of the Volscian city of Anxur, witnesses a barbarian army crush the Etruscan phalanx using a deadly combination of guile and ferocity. Can he awaken the senate from its torpor and save his own city from catastrophe? In an epic tale of friendship, heroism and betrayal, war sweeps across the ancient world as two civilisations vie for ascendancy. From the wind swept moors of Albion to the seven hills of Rome, the glacial peaks of the Alps to the tempestuous seas off the Pillars of Hercules the conflict unfolds which will decide the destiny of a continent.",
    authorId: may,
    publishDate: new Date("2014-11-04"),
    addedDate: new Date(),
    frontCoverURL: "covers/terrorgallicus.jpg",
    snippetURL: "snippets/terrorgallicus.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B00P9UPB8C/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00P9UPB8C&linkCode=as2&tag=booksnip-21",
    editorsPicks: true,
    live: true
  });

  // That Scoundrel Émile Dubois

  Books.insert({
    title: "That Scoundrel Émile Dubois",
    shortDescription: "Dark humour and over-the-top Gothic adventure set during the time of the French Revolutionary Wars as two scoundrels are incongruously drawn into occult adventure. But the romantic Sophie and her maid Agnes are eager to come to the rescue. Sophie de Courcy, bored companion to an elderly countess, dreams of adventure. When she meets her grand distant relative, the dashing Emile Dubois, she has more excitement than she ever dreamed of. Caught up in occult happenings with predatory half vampires and time warps, Sophie finds herself living in true Gothic style in an isolated mansion staffed by Emile's villainous accomplices. With the help of her Tarot reading maid, Sophie must somehow help Emile to overcome the sinister changes that are happening to him and to defeat their evil, half-human neighbours who need his co-operation to further their occult schemes. Set largely in isolated North Wales, this darkly humorous and sometimes sad story is both a spoof of Gothic and an occult adventure.",
    authorId: elliott,
    publishDate: new Date("2014-11-04"),
    addedDate: new Date(),
    frontCoverURL: "covers/scoundrelemiledubois.jpg",
    snippetURL: "http://files.vobes.com/booksnippet/scoundrelemiledubois.mp3",
    amazonUKURL: "http://www.amazon.co.uk/gp/product/B00AOA4FN4/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00AOA4FN4&linkCode=as2&tag=booksnip-21",
    editorsPicks: false,
    live: true
  });

}
if (Categories.find().count() === 0) {

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

}
