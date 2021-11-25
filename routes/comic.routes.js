const router = require('express').Router()
const { checkMongoID, isPM } = require('../utils')
const Comic = require('../models/Comic.model')
const {
  isLoggedIn,
  checkRoles,
  checkIfCurrUserOrAdmin,
} = require('./../middlewares')

//Show comic search page
router.get('/', isLoggedIn, (req, res) => res.render('comics/comic-list'))



module.exports = router