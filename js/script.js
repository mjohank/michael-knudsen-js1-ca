const container = document.querySelector(".movie-list");

const url = "https://imdb-top-100-movies.p.rapidapi.com/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac20bdc42bmshd41edb17e496193p1b50d1jsnb62819e66960",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

async function getMovies() {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    /*     console.log(json);
     */
    for (let i = 0; i < json.length; i++) {
      if (i === 30) {
        break;
      }
      container.innerHTML += `<a href="details.html?id=${json[i].id}" class="card">
                                <h3 class="card-rank">Rank ${json[i].rank}:</h3>
                                <div class="card-img" style="background-image:url(${json[i].image})"></div>
                                <h2 class="card-title">${json[i].title}</h2>
                              </a>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getMovies();
