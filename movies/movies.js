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
        this._genre = newGenre;
    }

    get genre() {
        return this._genre;
    }

    set year(newYear) {
        this._year = newYear;
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