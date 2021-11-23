const comicsAPI = new APIHandler()

const comicsContainer = document.querySelector('.comics-container')

const searchVolumes = document.getElementById('search')

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
                <a href="/comics/${comic.id}">
                  <img src="${comic.image.icon_url}" alt="Comic Image">
                  <span class="name">${comic.name}</span>
                </a>
                <div class="start-year">${comic.start_year}</div>
                <span class="count-of-issues">Issues: ${comic.count_of_issues}</div>
                <span class="publisher-name">Publisher: ${comic.publisher.name}</span>
            </li>`
      })
      comicsContainer.innerHTML = comicsInfo
    })
    .catch((err) => console.log(err))
}
