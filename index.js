// console.log('hello world')
const message = document.querySelector('#message')
document.querySelector("form").addEventListener("submit", addMovie)

function addMovie (event)  {
    event.preventDefault()
    let inputField = document.querySelector('input')


    const movie = document.createElement('li')

    const movieTitle = document.createElement("span")
    movieTitle.textContenet = inputField.value;
    movie.appendChild(movieTitle)
    
    
    const deleteBtn =document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(deleteBtn)
    
    const list = document.querySelector('ul')
    list.appendChild(movie)
    
    
    inputField.vaule = ''
}


function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}


function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true){
        message.textContent = "Movie Watched!"
    }else {
        message.textContent = "Movie Added Back!"
    }
}
