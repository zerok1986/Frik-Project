module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.session.currentUser) {
      next()
    } else {
      res.render('auth/login', {
        errorMsg: 'You must be logged to see this page',
      })
    }
  },

  checkRoles:
    (...roles) =>
    (req, res, next) => {
      roles.includes(req.session.currentUser.role)
        ? next()
        : res.render('auth/login', {
            errorMsg: "You don't have the permissions to visit this page",
          })
    },

  checkIfCurrUserOrAdmin: (req, res, next) => {
    if (
      req.session.currentUser._id === req.params.id ||
      req.session.currentUser.role === 'ADMIN'
    ) {
      next()
    } else {
      res.render('auth/login', {
        errorMsg: "You don't have the permissions to visit this page",
      })
    }
  },

}
