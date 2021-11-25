const router = require('express').Router()
const { checkMongoID, isAdmin, isCurrUser } = require('../utils')
const User = require('../models/User.model')
const {
  isLoggedIn,
  checkRoles,
  checkIfCurrUserOrAdmin,
} = require('../middlewares')

router.get('/', isLoggedIn, (req, res, next) => {
  User.find()
    .then((users) => res.render('users/user-list', { users }))
    .catch((err) => console.error(err))
})

router.get('/:id', isLoggedIn, (req, res, next) => {
  const { id } = req.params

  if (!checkMongoID(id)) {
    res.render('users/user-details', {
      errorMessage: 'Unknown user',
    })
  }

  User.findById(id)
    .populate('comics')
    .populate('friends')
    .then((user) => {
      res.render('users/user-details', {
        user,
        isAdmin: isAdmin(req.session.currentUser),
        isCurrUser: isCurrUser(req.session.currentUser, id),
      })
    })
    .catch((err) => console.error(err))
})

router.post(
  '/:id/delete',
  isLoggedIn,
  checkRoles('ADMIN'),
  (req, res, next) => {
    const { id } = req.params

    User.findByIdAndRemove(id)
      .then(() => res.redirect('/users'))
      .catch((err) => console.error(err))
  }
)

router.get(
  '/:id/edit',
  isLoggedIn,
  checkRoles('USER', 'ADMIN'),
  checkIfCurrUserOrAdmin,
  (req, res, next) => {
    const { id } = req.params

    User.findById(id)
      .select({ password: 0 })
      .then((user) =>
        res.render('users/edit-user', {
          user,
          id,
          isAdmin: isAdmin(req.session.currentUser),
        })
      )
      .catch((err) => console.log(err))
  }
)

router.post(
  '/:id/edit',
  isLoggedIn,
  checkRoles('USER', 'ADMIN'),
  checkIfCurrUserOrAdmin,
  (req, res, next) => {
    const { id } = req.params
    const { username, name, description, profileImg, role } = req.body

    User.findByIdAndUpdate(
      id,
      {
        username,
        name,
        description,
        profileImg,
        role,
      },
      { new: true }
    )
      .then((user) => res.redirect(`/users/${user._id}`))
      .catch((err) => console.error(err))
  }
)

router.post(
  '/add-friend/:id',
  isLoggedIn,
  checkRoles('USER', 'ADMIN'),
  (req, res) => {
    const currentUserId = req.session.currentUser._id
    const { id } = req.params

    User.findByIdAndUpdate(
      currentUserId,
      { $push: { friends: id } },
      { new: true }
    )
      .then(() => res.redirect('/users'))
      .catch((err) => console.log(err))
  }
)

module.exports = router
