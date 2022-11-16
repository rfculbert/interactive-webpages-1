console.log('hello world')

const addMovie = (event) => {
    let inputField = document.querySelector('input')
    let movie = document.createElement(li)
    let movieTitle = document.createElement("span")
    movieTitle.textContenet = inputField.value;
    movie.appendChild(movieTitle)
    
    let movie = document.querySelector('ul')
}

document.querySelector('form').addEventListener('submit', addMovie)