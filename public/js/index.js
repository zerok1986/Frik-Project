const comicsAPI = new APIHandler()

const comicsContainer = document.querySelector('.comics-container')

const searchVolumes = document.getElementById('search')



window.addEventListener('load', () => {
  //Fetch All
  document.getElementById('search')?.addEventListener('click', function (event) {
    
    // event.preventDefault()
    console.log("haciendo click")
    const query = document.querySelector('.operation input').value
    loadComicsFromAPI(query)
  });

  //Fetch One
//   document.getElementById('fetch-one').addEventListener('click', function (event) {

//     event.preventDefault()
//     const id = document.querySelector('.operation input').value

//     charactersAPI.getOneRegister(id)
//       .then(res => {
//         let charactersInfo = ''
//         console.log(res);
//         charactersInfo += `<div class="character-info">
//         <div class="name">Character Name: ${res.data.name}</div>
//         <div class="occupation">Character Occupation: ${res.data.occupation}</div>
//         <div class="cartoon">Is a Cartoon? ${res.data.cartoon}</div>
//         <div class="weapon">Character Weapon: ${res.data.weapon}</div>
//         </div>`

//         charactersContainer.innerHTML = charactersInfo
//       })
//       .catch(err => console.log(err))
//   });


//   //Delete
//   const deleteForm = document.querySelector('#delete-form')
//   let deleteButton = document.querySelector('#delete-one')

//   document.getElementById('delete-one').addEventListener('click', function (event) {

//     event.preventDefault()
//     const id = document.querySelector('.operation.delete input').value

//     charactersAPI.deleteOneRegister(id)
//       .then(res => {
//         deleteForm.reset()
//         deleteButton.style.background = 'green'
//         loadCharactersFromAPI()
//       })
//       .catch(err => deleteButton.style.background = 'green')
//   });

//   //Edit one
//   const editCharacterForm = document.querySelector('#edit-character-form')
//   let editButton = document.querySelector('#send-data-edit')

//   document.getElementById('edit-character-form').addEventListener('submit', function (event) {

//     event.preventDefault()

//     const editFormInputs = document.querySelectorAll('#edit-character-form input')

//     const id = editFormInputs[0].value
//     const name = editFormInputs[1].value
//     const occupation = editFormInputs[2].value
//     const weapon = editFormInputs[3].value
//     const cartoon = editFormInputs[4].checked
//     const info = {
//       name,
//       occupation,
//       weapon,
//       cartoon
//     }

//     charactersAPI.updateOneRegister(id, info)
//       .then(res => {
//         editCharacterForm.reset()
//         editButton.style.background = 'green'
//         loadCharactersFromAPI()
//       })
//       .catch(err => editButton.style.background = 'red')

//   });

//   //Create one
//   const newCharacterForm = document.querySelector('#new-character-form')
//   let createButton = document.querySelector('#send-data-create')

//   document.getElementById('new-character-form').addEventListener('submit', function (event) {

//     event.preventDefault()

//     const inputs = document.querySelectorAll('#new-character-form input')

//     const name = inputs[0].value
//     const occupation = inputs[1].value
//     const weapon = inputs[2].value
//     const cartoon = inputs[3].checked
//     const info = {
//       name,
//       occupation,
//       weapon,
//       cartoon
//     }

//     charactersAPI.createOneRegister(info)
//       .then(res => {
//         newCharacterForm.reset()
//         createButton.style.background = 'green'
//         loadCharactersFromAPI()
//       })
//       .catch (err => createButton.style.background = 'red')
//   });
});

function loadComicsFromAPI(query) {
  comicsAPI.getVolumes(query)
      .then(res => {
        let comicsInfo = ''

        console.log('hola', res.data)

        res.data?.forEach(comic => {
          comicsInfo += `
            <div class="comic-info">
                <img src="${comic.image.icon_url}" alt="Comic Image">
                <span class="name">${comic.name}</span>
                <div class="start-year">${comic.start_year}</div>
                <span class="count-of-issues">Issues: ${comic.count_of_issues}</div>
                <span class="publisher-name">Publisher: ${comic.publisher.name}</span>
            </div>`
        })

        comicsContainer.innerHTML = comicsInfo
      })
      .catch(err => console.log(err))
}