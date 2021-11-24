const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User.model')

// Signup
router.get('/registro', (req, res) => res.render('auth/signup'))
router.post('/registro', (req, res) => {
  const { username, userPwd } = req.body

  if (userPwd.length === 0 || username.length === 0) {
    res.render('auth/signup-form', { errorMsg: 'Please fill all the fields' })
    return
  }

  User.findOne({ username })
    .then((user) => {
      if (user) {
        res.render('auth/signup', { errorMsg: 'This user is already registered' })
        return
      }

      const bcryptSalt = 10
      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(userPwd, salt)

      User.create({ username, password: hashPass })
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
})

// Login
router.get('/iniciar-sesion', (req, res) => res.render('auth/login'))
router.post('/iniciar-sesion', (req, res) => {
  const { username, userPwd } = req.body

  if (userPwd.length === 0 || username.length === 0) {
    res.render('auth/login', { errorMsg: 'Please fill all the fields' })
    return
  }

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.render('auth/login', { errorMsg: 'Unknown user' })
        return
      }

      if (bcrypt.compareSync(userPwd, user.password) === false) {
        res.render('auth/login', { errorMsg: 'Wrong password' })
        return
      }

      req.session.currentUser = user
      res.render('index', { loginMsg: 'Login successful' })
    })
    .catch((err) => console.log(err))
})

// Logout
router.get('/cerrar-sesion', (req, res) => {
  req.session.destroy(() =>
    res.render('index', { logoutMsg: 'Logout successful' })
  )
})

module.exports = router
