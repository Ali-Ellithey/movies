let basUrl = "https://image.tmdb.org/t/p/original/";

let allMovies = document.getElementById('allMovies');
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjE0NDIxYWU1YjdkMmU4YjAwMTk3Yzg5ZWVmNDkzOCIsIm5iZiI6MTczMDA2OTAzOC41NjY2NTEsInN1YiI6IjY3MWViNDU1OWZmNjgxZDllMGE0ODIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YzSm1ZglvxtodUeS14oCB_jtbv1oPsUZjdIk-OEFx4E'
    }
};


function getMovies(category) {
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=eg_us&page=1`, options)
        .then(res => res.json())
        .then(res => {
            let nowPlaying = res.results
            allMovies.innerHTML = ``;
            nowPlaying.forEach(movie => {
                allMovies.innerHTML += `
          <div class="movie">
        <img src="${basUrl}${movie.poster_path}" alt="" />
        <div class="moviediscrpiton">
          <h2>${movie.title}</h2>
          <p>${movie.overview}</p>
          <p>Rate: ${movie.popularity}</p>
          <p>Date: ${movie.release_date}</p>
        </div>
      </div>
         `
            })
        })
};

window.onload = function () {
    getMovies('now_playing');
};


let etn = document.getElementById('etn');
window.onscroll = function () {
    if (scrollY >= 200) {
        etn.style.display = 'block';
    }
    else {
        etn.style.display = 'none';
    }
};
etn.onclick = function () {
    scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
};


var inputSearch = document.getElementById('inputSearch');
var inputRate = document.getElementById('inputRate');

inputSearch.addEventListener('keyup', () => {
    var searchKeyWord = inputSearch.value
    if (!searchKeyWord) {
        getMovies('now_playing');
        return;  // stop the function if no search key word is provided.  This prevents unnecessary API calls.  It's a good practice to optimize your code like this.  Also, it prevents potential errors in your code.  In this case, it doesn't make a difference in this specific case, but it's a good practice to follow.  The function continues to fetch the 'now_playing' movies if the search input is empty.  If you want to fetch different movies based on the search input, you would need to add an additional condition to the if statement.  For example, if(searchKeyWord){...}  This would only fetch movies if a search key word is provided.  But remember, this is just a simple example and you may need to adjust the code to fit your specific needs.  For example, you may want to display a message to the user if no movies are found.  Or you may
    }
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchKeyWord}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => {
            let nowPlaying = res.results
            allMovies.innerHTML = ``;
            nowPlaying.forEach(movie => {
                allMovies.innerHTML += `
          <div class="movie">
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="" />
        <div class="moviediscrpiton">
          <h2>${movie.title}</h2>
          <p>${movie.overview}</p>
          <p>Rate: ${movie.popularity}</p>
          <p>Date: ${movie.release_date}</p>
        </div>
      </div>
         `
            })
        });
});

inputRate.addEventListener('keyup', () => {
    var searchRateKeyWord = inputRate.value
    if (!searchRateKeyWord) {
        getMovies('now_playing');
        return;  // stop the function if no search key word is provided.  This prevents unnecessary API calls.  It's a good practice to optimize your code like this.  Also, it prevents potential errors in your code.  In this case, it doesn't make a difference in this specific case, but it's a good practice to follow.  The function continues to fetch the 'now_playing' movies if the search input is empty.  If you want to fetch different movies based on the search input, you would need to add an additional condition to the if statement.  For example, if(searchKeyWord){...}  This would only fetch movies if a search key word is provided.  But remember, this is just a simple example and you may need to adjust the code to fit your specific needs.  For example, you may want to display a message to the user if no movies are found.  Or you may
    }

    fetch(`https://api.themoviedb.org/3/search/collection?query=${searchRateKeyWord}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => {
            let nowPlaying = res.results
            allMovies.innerHTML = ``;
            nowPlaying.forEach(movie => {
                allMovies.innerHTML += `
          <div class="movie">
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="" />
        <div class="moviediscrpiton">
          <h2>${movie.title}</h2>
          <p>${movie.overview}</p>
          <p>Rate: ${movie.popularity}</p>
          <p>Date: ${movie.release_date}</p>
        </div>
      </div>
         `
            })
        });
});



function getMoviesByPage(pageNumber) {
    fetch(`https://api.themoviedb.org/3/person/changes?${pageNumber}`, options)
        .then(res => res.json())
        .then(res => {
            let nowPlaying = res.results
            allMovies.innerHTML += ``;
            nowPlaying.forEach(movie => {
                allMovies.innerHTML += `
          <div class="movie">
        <img src="${basUrl}${movie.poster_path}" alt="" />
        <div class="moviediscrpiton">
          <h2>${movie.title}</h2>
          <p>${movie.overview}</p>
          <p>Rate: ${movie.popularity}</p>
          <p>Date: ${movie.release_date}</p>
        </div>
      </div>
         `
            })
        })
};
let english = document.getElementById('english');
let arabic = document.getElementById('arabic');

arabic.addEventListener('click', function () {

    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=ar&page=1`, options)
        .then(res => res.json())
        .then(res => {
            let nowPlaying = res.results
            allMovies.innerHTML = ``;
            nowPlaying.forEach(movie => {
                allMovies.innerHTML += `
          <div class="movie">
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="" />
        <div class="moviediscrpiton">
          <h2>${movie.title}</h2>
          <p>${movie.overview}</p>
          <p>Rate: ${movie.popularity}</p>
          <p>Date: ${movie.release_date}</p>
        </div>
      </div>
         `
            })
        });
});