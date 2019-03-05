class Movies {
    constructor(title, genre, year) {
        this._title = title;
        this._genre = genre;
        this._year= year;
        counter++;
    }

    set title(newTitle) {

        if (typeof newTitle === "string") {
            this._title = newTitle;
        } else {
            console.log(`Invalid title: ${newTitle} (keeping ${this._title})`);
        }

    }

    get title() {
        return this._title;
    }

    set genre(newGenre) {
        if (Object.values(Movies.genres).includes(newGenre)) {
            this._genre = newGenre;
        } else {
            console.log(`Invalid genre: ${newGenre} (keeping ${this._genre})`);
        }
    }

    get genre() {
        return this._genre;
    }

    set year(newYear) {
        if (typeof newYear === "number" && newYear >= this._year) {
            this._year = newYear;
        } else {
            console.log(`Invalid year: ${newYear} (keeping ${this._year})`);
        }
    }

    get year() {
        return this._year;
    }

    static createActionMovie(title, year) {
        return new Movies(title, Movies.genres.ACTION, year);
    }

    static get counter() {
        return counter;
    }
}

Movies.genres = {
    ACTION: "action",
    ACTION_COMEDY: "action comedy",
    COMEDY: "comedy",
    CRIME: "crime",
    DRAMA: "drama"
};

let counter = 0;

module.exports = Movies;