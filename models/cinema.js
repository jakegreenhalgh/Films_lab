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
  let results = []
    this.films.forEach((film) => {
      if (film.length >= time);
      results.push(film);
    });

    if (this.films.length === results.length){
      return true
    } else {
      return false
    }

}

Cinema.prototype.totalRunningTime = function () {
  let results = []
  this.films.forEach((film) => {
    results.push(film.length)
  })
  return results.reduce((runningTotal, currentNumber) => {return runningTotal + currentNumber}, 0)
}


Cinema.prototype.filterFilmsByProperty = function (property, value) {
  return this.films.filter(film => film[property] === value)
}

module.exports = Cinema;
