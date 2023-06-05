const detailContainer = document.querySelector(".movie-details");
const pageTitle = document.querySelector("title");
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
    // console.log(response);
    const movieDetails = await response.json();
    // console.log(movieDetails);

    pageTitle.innerHTML = `${movieDetails.id}: ${movieDetails.title}`;

    detailContainer.innerHTML = `<div class="movie-container">
                                  <div class="top-flex">
                                    <p class="rank">Rank ${movieDetails.rank} / 30</p>
                                    <p class="rating">IMDB rating: <span class="rating-number">${movieDetails.rating}</span> / 10</p>
                                  </div>

                                  <h1 class="details-title">${movieDetails.title}</h1>

                                  <div class="details-container">
                                    <p class="director details"><span class="detail-heading">Director:</span> ${movieDetails.director}</p>
                                    <p class="genre details"><span class="detail-heading">Genre:</span> ${movieDetails.genre}</p>
                                    <p class="year details"><span class="detail-heading">Year:</span> ${movieDetails.year}</p>
                                    <p class="description details"><span class="detail-heading">Description:</span> ${movieDetails.description}</p>
                                  </div>

                                  <div class="trailer-container">
                                    <iframe width="560" height="315" src="${movieDetails.trailer}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  </div>

                                  <p>If you have any issues viewing the content on this page or would like to give us your two cents on the rating of this movie, feel free to let us know by <a href="../contact.html" class="details-contact-link">clicking this link</a></p>
                                </div>
                                  
                                  `;
  } catch (error) {
    console.log(error);
  }
}

fetchMovieDetails();
