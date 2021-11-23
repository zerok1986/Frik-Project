const { default: axios } = require('axios')
const User = require('../models/User.model')
const Comic = require('../models/Comic.model')
const {
  isLoggedIn,
  checkRoles,
  checkIfCurrUserOrAdmin,
} = require('./../middlewares')
const router = require('express').Router()
const API_KEY = process.env.API_KEY

router.post('/search', (req, res) => {
  const { query } = req.body
  axios
    .get(
      `https://comicvine.gamespot.com/api/search/?api_key=${API_KEY}&format=json&sort=name:asc&resources=volume&query=${query}&limit=10`
    )
    .then((response) => {
      res.json(response.data.results)
    })
    .catch((err) => console.log(err))
})

router.get('/search/:id', isLoggedIn, (req, res) => {
  const { id } = req.params

  axios
    .get(
      `https://comicvine.gamespot.com/api/volume/4050-${id}/?api_key=${API_KEY}&format=json`
    )
    .then((comic) => {
      console.log(comic)
      res.render('comics/comic-details', { comic })
    })
    .catch((err) => console.log(err))
})

router.post('/add-comic', (req, res) => {
  const id = req.session.currentUser._id
  const newComic = req.body

  console.log(newComic)

  Comic.create(newComic)
    .then((comic) =>
      User.findByIdAndUpdate(
        id,
        { $push: { comics: comic._id } },
        { new: true }
      )
    )
    .then(() => res.json('Todo OK'))
    .catch((err) => console.log(err))
})

module.exports = router
