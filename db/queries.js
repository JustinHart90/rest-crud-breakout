const pg = require('./connection');

function addMovie(movie) {
  return pg('movies')
    .returning('id')
    .insert(movie)
}

function editMovie(data, id) {
  return pg('movies')
    .where('id', id)
    .update(data)
}

function deleteMovie(id) {
  return pg('movies')
    .where('id', id)
    .del()
}

function getMovies() {
  return pg('movies')
    .select()
}

function getMovieById(id) {
  return pg('movies')
    .select()
    .where('id', id)
    .first()
}

function replaceMovie(data, id) {
  return pg('movies')
    .where('id', id)
    .update(data)
}

module.exports = {
  addMovie,
  editMovie,
  deleteMovie,
  getMovies,
  getMovieById,
  replaceMovie
}
