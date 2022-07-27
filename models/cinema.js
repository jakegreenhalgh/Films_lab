const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.filmTitles = function (){
  const titles = this.films.map(film => film.title);
  return titles;
}

Cinema.prototype.findFilmByTitle = function (title) {
  for (film of this.films) {
    if (film.title === title){
      return film; 
    }
  }
}

Cinema.prototype.filterFilmsByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre)
}

Cinema.prototype.filterFilmsByYear = function (year) {
  return this.films.filter(film => film.year === year)
}

Cinema.prototype.checkFilmsLength = function(time) {
  return this.films.every((film) => {
    return film.length >= time;
  });
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};


Cinema.prototype.filterFilmsByProperty = function (property, value) {
  return this.films.filter(film => film[property] === value)
}

module.exports = Cinema;
