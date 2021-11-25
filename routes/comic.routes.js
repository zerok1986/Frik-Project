const router = require('express').Router()
const { checkMongoID, isPM } = require('../utils')
const Comic = require('../models/Comic.model')
const { isLoggedIn, checkRoles } = require('./../middlewares')

router.get('/', isLoggedIn, checkRoles('USER', 'ADMIN'), (req, res) =>
  res.render('comics/comic-list')
)

module.exports = router
