
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
              <a id="details-link" href="/api/search/${comic.id}">
                <img class="comic-img comic-img-small" src="${comic.image.super_url}" alt="Comic Image">
              </a>
              <div class="list-add-box">
                <div>
                  <a id="details-link" href="/api/search/${comic.id}">
                    <p class="name list-name">${comic.name}</p>
                  </a>
                  <span> 
                    Number of issues: <span class="start-year">${comic.start_year}</span>
                  </span>
                  <span>  
                    (<span class="count-of-issues">${comic.count_of_issues}</span> Issues)
                  </span>
                  <span> 
                    Publisher: <span class="publisher-name">${comic.publisher.name}</span>
                  </span>
                  <div class="description" style="display: none">${comic.description}</div>
                </div>
                <button class="btn btn-dark" id="add-comic">Add to favorites</button>
              </div>
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
                el.querySelector('#add-comic').style.backgroundColor = '#73db5e'
              else {
                el.querySelector('#add-comic').style.backgroundColor = '#ffcaca'
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
