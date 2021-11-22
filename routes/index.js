module.exports = (app) => {
  // Base routes
  const baseRoutes = require('./base.routes')
  app.use('/', baseRoutes)

  // Auth routes
  const authRoutes = require('./auth.routes')
  app.use('/', authRoutes)
  
  // User routes
  const userRoutes = require('./user.routes')
  app.use('/users', userRoutes)
  
  // Comic routes
  const comicRoutes = require('./comic.routes')
  app.use('/comics', comicRoutes)

  // API routes
  const apiRoutes = require('./api.routes')
  app.use('/api', apiRoutes)

}
