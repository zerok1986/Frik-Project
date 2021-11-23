const { default: axios } = require('axios')

const router = require('express').Router()

router.post('/search', (req, res) => {
  const { query } = req.body
  axios
    .get(
      `https://comicvine.gamespot.com/api/search/?api_key=8e51b7f7f1fdc9fde6accd0952519a7395de6931&format=json&sort=name:asc&resources=volume&query=${query}&limit=10`
    )
    .then((response) => {
      res.json(response.data.results)
    })
    .catch((err) => console.log(err))
})

module.exports = router
