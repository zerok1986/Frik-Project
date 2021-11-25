const router = require('express').Router()
const { checkMongoID, isAdmin, isCurrUser } = require('../utils')
const User = require('../models/User.model')
const Comic = require('../models/Comic.model')
const Review = require('../models/Review.model')
const { isLoggedIn, checkRoles } = require('../middlewares')

router.get('/', isLoggedIn, checkRoles('USER', 'ADMIN'), (req, res) => {
  const currUser = req.session.currentUser
  Review.find()
    .populate('comic')
    .populate('owner')
    .then((reviews) => {
      res.render('reviews/review-list', {
        reviews,
        isCurrUserOrAdmin:
          currUser.role === 'ADMIN' || currUser?._id === reviews.owner?._id,
      })
    })
    .catch((err) => console.log(err))
})

router.get(
  '/review-create',
  isLoggedIn,
  checkRoles('USER', 'ADMIN'),
  (req, res) => {
    User.findById(req.session.currentUser._id)
      .populate('comics')
      .then((user) => res.render('reviews/add-review', { comics: user.comics }))
      .catch((err) => console.log(err))
  }
)

router.post(
  '/review-create',
  isLoggedIn,
  checkRoles('USER', 'ADMIN'),
  (req, res) => {
    const owner = req.session.currentUser._id
    const { title, description, rating, comic } = req.body

    Review.create({ title, description, rating, owner, comic })
      .then(() => res.redirect('/reviews'))
      .catch((err) => console.log(err))
  }
)

router.post(
  '/review-delete/:id',
  isLoggedIn,
  checkRoles('USER', 'ADMIN'),
  (req, res) => {
    const { id } = req.params

  Review.findById(id)
    .populate('owner')
    .then((review) => {
      if (
        review.owner.username === req.session.currentUser.username ||
        req.session.currentUser.role === 'ADMIN'
      ) {
        Review.findByIdAndRemove(id)
          .then(() =>
            res.render('reviews/review-list', { infoMsg: 'Review deleted successfully' })
          )
          .catch((err) => console.log(err))
      } else {
        res.render('reviews/review-list', {
          errorMsg: `You don't have permissions to delete this review`,
        })
      }
    })
    .catch((err) => console.log(err))
})

router.get(
  '/review-edit/:id',
  isLoggedIn,
  checkRoles('USER', 'ADMIN'),
  (req, res) => {
    const { id } = req.params
    const userId = req.session.currentUser._id
    const thisUserComics = User.findById(userId).populate('comics')
    const review = Review.findById(id).populate('comic')

    Promise.all([thisUserComics, review])
      .then((data) => {
        const [thisUserComics, review] = data
        res.render('reviews/edit-review', { thisUserComics, review })
      })
      .catch((err) => console.log(err))
  }
)

router.post(
  '/review-edit/:id',
  isLoggedIn,
  checkRoles('USER', 'ADMIN'),
  (req, res) => {
    const { id } = req.params
    const owner = req.session.currentUser._id
    const { title, description, rating, comic } = req.body

    Review.findByIdAndUpdate(
      id,
      { title, description, rating, owner, comic },
      { new: true }
    )
      .then(() => res.redirect('/reviews'))
      .catch((err) => console.log(err))
  }
)

module.exports = router
