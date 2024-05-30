class Movie {
  constructor(title = "", studio = "", rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(movies = [Movie]) {
    var filteredArray = [];
    movies.forEach((movie) => {
      if (movie.rating === "PG") {
        filteredArray.push(movie);
      }
    });
    return filteredArray;
  }
}

const CasinoRoyale = new Movie("Casino Royale", "EREon Productions");
const XXX = new Movie("XXX", "Universal");
const FastAndFurious = new Movie("FastAndFurious", "Universal", "PG13");
const IRON_MAN = new Movie("IR1", "EROS", "R");

console.log(CasinoRoyale.getPG([CasinoRoyale, XXX, FastAndFurious, IRON_MAN]));
