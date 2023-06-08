import { errorMessage } from "./components/errorMessage.js";

const movieList = document.querySelector(".movie-list");
const loaderContainer = document.querySelector(".loader-container");
//The loaderContainer is just a "quick-fix" to centering the loader

const url = "https://imdb-top-100-movies.p.rapidapi.com/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "insert apikey here(found in pdf together with zip file)",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

async function fetchMovies() {
  try {
    const response = await fetch(url, options);
    const json = await response.json();

    movieList.innerHTML = "";
    loaderContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
      if (i === 30) {
        break;
      }
      movieList.innerHTML += `<a href="details.html?id=${json[i].id}" class="card">
                                <h2 class="card-rank">Rank ${json[i].rank}:</h2>
                                <div class="card-img" style="background-image:url(${json[i].image})"></div>
                                <h3 class="card-title">${json[i].title}</h3>
                              </a>`;
    }
  } catch (error) {
    loaderContainer.innerHTML = "";
    movieList.innerHTML = errorMessage(
      "An error occurred while trying to fetch the API"
    );
  }
}

fetchMovies();
