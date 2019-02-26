const Movie = require("./movies");

let forrestGump = new Movie("Forrest Gump", Movie.genres.DRAMA, 1994);
console.log(forrestGump);
console.log(`The ${forrestGump.genre} movie "${forrestGump.title}" was released in ${forrestGump.year}.\n`);

let blackPanther = Movie.createActionMovie("Black Panther", 2018);
console.log(blackPanther);
console.log(`The ${blackPanther.genre} movie "${blackPanther.title}" was released in ${blackPanther.year}.`);



// let newTitle = "asdasd";

// console.log(typeof newTitle);

console.log(`\nNumber of Movies: ${Movie.counter}`);