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

//Search
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

//Details
router.get('/search/:id', isLoggedIn, (req, res) => {
  const { id } = req.params

  axios
    .get(
      `https://comicvine.gamespot.com/api/volume/4050-${id}/?api_key=${API_KEY}&format=json`
    )
    .then((comic) => {

      // const isFavorite = false
      res.render('comics/comic-details', { comic })
    })
    .catch((err) => console.log(err))
})

//Add comic to user profile in details page
router.post('/search/:id', isLoggedIn, (req, res) => {
  const {id} = req.params
  const userId = req.session.currentUser._id
  
  User.findById(userId)
    .populate('comics')
    .then(user => {
      if(user.comics.some(el => el.comicImg === req.body.comicImg)) {
        axios
          .get(
            `https://comicvine.gamespot.com/api/volume/4050-${id}/?api_key=${API_KEY}&format=json`
          )
          .then((comic) => {

            res.render('comics/comic-details', {
              comic,
              errorMsg: "Comic already on your list"
            })
          })
          .catch((err) => console.log(err))
      } else {
        axios
          .get(
            `https://comicvine.gamespot.com/api/volume/4050-${id}/?api_key=${API_KEY}&format=json`
          )
          .then((comic) => {
            Comic.create(req.body)
              .then((comic) =>
                User.findByIdAndUpdate(
                  userId,
                  { $push: { comics: comic._id } },
                  { new: true }
                )
              )
              .then(() => res.render('comics/comic-details', {
                comic,
                infoMsg: "Comic added successfully to your list"
              }))
              .catch(err => console.log(err))
          })
          .catch((err) => console.log(err))
      }
    })
    .catch(err => console.log(err))
})

//Add comic to user profile in comic list
router.post('/add-comic', (req, res) => {
  const id = req.session.currentUser._id
  const newComic = req.body

  User.findById(req.session.currentUser._id)
    .populate('comics')
    .then(user => {
      if(user.comics.some(el => el.comicImg === newComic.comicImg)) {
        res.json('Error')
        return;
      }
    
      Comic.create(newComic)
        .then((comic) =>
          User.findByIdAndUpdate(
            id,
            { $push: { comics: comic._id } },
            { new: true }
          )
        )
        .then(() => res.json('OK'))
        .catch((err) => console.log(err))
    
    })
})

module.exports = router
