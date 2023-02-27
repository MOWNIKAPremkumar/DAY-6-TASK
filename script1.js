

// 1.Class - Movie

class Movie {
    constructor(title= '', studio = '', rating = '') {
       this.title = title;
       this.studio = studio;
       this.rating = rating;
    }
 
    getPG(movies = [], rating = '') {
       return movies.filter((m) => m.rating === rating);
    }
 }
 
const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
const leo = new Movie('Leo', 'LCU', 'PG');
const vikram = new Movie('Vikram', 'Raj KamalFilms','PG' );
const avatar = new Movie('Avatar: The water way', 'Light Strom Entertainment', 'PG13');
const avengers = new Movie('The avengers: End Game', 'Marvel Studios', 'PG13');
 
const moviesArray = [casionRoyaleMovie, leo, vikram, avatar, avengers];
 
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG13'));
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG'));




