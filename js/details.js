const movieInfo = document.querySelector(".movie-info-container");
const pageTitle = document.querySelector("title");
const currentLocation = document.querySelector(".current-location");
const loaderContainer = document.querySelector(".loader-container");
// loaderContainer is just a quickfix to center the loader.

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// console.log(id);

const detailsURL = "https://imdb-top-100-movies.p.rapidapi.com/" + id;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac20bdc42bmshd41edb17e496193p1b50d1jsnb62819e66960",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

async function fetchMovieDetails() {
  try {
    const response = await fetch(detailsURL, options);

    const movieDetails = await response.json();
    console.log(movieDetails);

    pageTitle.innerHTML = `${movieDetails.id}: ${movieDetails.title}`;
    currentLocation.innerHTML = `${movieDetails.title}`;

    loaderContainer.innerHTML = "";
    movieInfo.innerHTML = `<div class="movie-container">
                              <div class="rank-rating-bar">
                                <p class="rank">Rank <span class="rank-number">${movieDetails.rank}</span> / 30</p>
                                <p class="rating">IMDB rating: <span class="rating-number">${movieDetails.rating}</span> / 10</p>
                              </div>

                              <h1 class="details-title">${movieDetails.title}</h1>

                              <div class="details-container">
                                <h2 class="director details"><span class="detail-heading">Director:</span> ${movieDetails.director}</h2>
                                <h2 class="genre details"><span class="detail-heading">Genre:</span> ${movieDetails.genre}</h2>
                                <h2 class="year details"><span class="detail-heading">Year:</span> ${movieDetails.year}</h2>
                                <h2 class="description details"><span class="detail-heading">Description:</span> ${movieDetails.description}</h2>
                              </div>                             

                              <div class="details-img" style="background-image: url(${movieDetails.image})"></div>
                          </div>`;
  } catch (error) {
    loaderContainer.innerHTML = "";
    movieInfo.innerHTML = errorMessage(
      "An error occurred while trying to fetch the API"
    );
  }
}

fetchMovieDetails();
