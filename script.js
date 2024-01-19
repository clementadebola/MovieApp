document.addEventListener('DOMContentLoaded', function() {

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const movieList = document.getElementById('movieList');

    searchButton.addEventListener('click', function(){
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== ''){
        searchMovies(searchTerm);
    }
    });

    async function fetchData() {
        try{
            const response = await fetch();
            const data = await response.json();
            displayMovies(data.results);
            
        } catch (error){
            console.error('Error fetching data:', error);

        }
    }

    function displayMovies(movies) {
        movieList.innerHTML = '';
        movieList.forEach(movie => {
            const  movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.release_date}</p>
            `;
            movieList.appendChild(movieElement);
        });
    }


});