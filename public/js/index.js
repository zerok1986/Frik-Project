
const comicsAPI = new APIHandler()
const comicsContainer = document.querySelector('.comics-container')
const searchVolumes = document.getElementById('search')
const addFriendBtn = document.getElementById('add-friend')

window.addEventListener('load', () => {
  document
    .getElementById('search')
    ?.addEventListener('click', function (event) {
      const query = document.querySelector('.operation input').value
      loadComicsFromAPI(query)
    })
})

function loadComicsFromAPI(query) {
  comicsAPI
    .getVolumes(query)
    .then((res) => {
      let comicsInfo = ''

      res.data?.forEach((comic) => {
        comicsInfo += `
            <li class="comic-info">
                <a href="/api/search/${comic.id}">
                  <img class="comic-img comic-img-small" src="${comic.image.super_url}" alt="Comic Image">
                  <span class="name">${comic.name}</span>
                </a>
                <span class="start-year">${comic.start_year}</span>
                <span class="count-of-issues">${comic.count_of_issues}</span>
                <span class="publisher-name">${comic.publisher.name}</span>
                <div class="description" style="display: none">${comic.description}</div>
                <button class="btn btn-primary" id="add-comic">Add to favorites</button>
                <br>
            </li>`
      })
      comicsContainer.innerHTML = comicsInfo

      return
    })
    .then(() => {
      const comics = document.querySelectorAll('li.comic-info')
      // const buttons = document.querySelectorAll('#add-comic')

      comics.forEach((el) =>
        el.querySelector('#add-comic').addEventListener('click', function () {
          // console.log(e.target.parentElement.parentElement)
          let newComic = {
            name: el.querySelector('.name').innerText,
            description: el.querySelector('.description').innerText,
            issues: el.querySelector('.count-of-issues').innerText,
            publisher: el.querySelector('.publisher-name').innerText,
            comicImg: el.querySelector('.comic-img').src,
          }

          // console.log(newComic)

          // req.session.currentUser.comics.push(newComic)

          axios
            .post('/api/add-comic', newComic)
            .then((response) => {
              console.log(response)
              if (response.data === 'OK')
                el.querySelector('#add-comic').style.backgroundColor = '#7CFC00'
              else {
                el.querySelector('#add-comic').style.backgroundColor = 'red'
                el.querySelector('#add-comic').innerText =
                  'This comic is already in your favorites'
              }
              // el.querySelector('#add-comic').disabled = true
            })
            .catch((err) => console.log(err))
        })
      )
    })
    .catch((err) => console.log(err))
}
