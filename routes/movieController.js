const express = require('express')
const router = express.Router()
const Movie = require('../models/movie') 

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (err) {
        res.send('Error ' + err)
    }
})

// Get a movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.json(movie)
    } catch (err) {
        res.send('Error ' + err)
    }
})

// Create a new movie
router.post('/', async (req, res) => {
    const movie = new Movie({
        name: req.body.name,
        theme: req.body.theme,
        documentary: req.body.documentary
    })

    try {
        const m1 = await movie.save()
        res.json(m1)
    } catch (err) {
        res.send('Error ' + err)
    }
})

// Update a movie
router.patch('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (req.body.name) movie.name = req.body.name
        if (req.body.theme) movie.theme = req.body.theme
        if (req.body.documentary !== undefined) movie.documentary = req.body.documentary

        const m1 = await movie.save()
        res.json(m1)
    } catch (err) {
        res.send('Error ' + err)
    }
})
// Delete a movie
// Delete a movie
router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.json({ message: 'Movie deleted' });
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});


module.exports = router
