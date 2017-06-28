const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET request to /movies - get all movies */
router.get('/', (req, res, next) => {
  return queries.getMovies()
    .then(movies => res.json(movies))
    .catch(err => next(err))
});

/* GET request to /movies/1 - get movie with id of 1 */
router.get('/:id', (req, res, next) => {
  return queries.getMovieById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => next(err))
});

/* POST request to /movies - add new movie */
router.post('/', (req, res, next) => {
  return queries.addMovie(req.body)
    .then(id => res.send('movie was added with the id of: ' + id))
    .catch(err => next(err))
});

/* PATCH request to /movies/1 - edit movie with id of 1 */
router.patch('/:id', (req, res, next) => {
  return queries.editMovie(req.body, req.params.id)
    .then(() => res.send('movie was edited'))
    .catch(err => next(err))
})

/* DELETE request to /movies/1 - delete movie with id of 1 */
router.delete('/:id', (req, res, next) => {
  return queries.deleteMovie(req.params.id)
    .then(() => res.send('movie was deleted'))
    .catch(err => next(err))
})

/* PUT request to /movies/1 - replace movie with id of 1 */
router.put('/:id', (req, res, next) => {
  return queries.replaceMovie(req.body, req.params.id)
    .then(() => res.send('movie was replaced'))
    .catch(err => next(err))
})

module.exports = router;
