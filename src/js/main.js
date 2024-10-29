import { movies } from "./modules/movies";
import { popular } from "./modules/popular";
import { series } from "./modules/series";

import { getRecommendMovies, initEventListeners } from "./modules/search";

import { getMovies } from "./modules/home";

// const functions = [movies(), popular(), series()];

document.addEventListener("DOMContentLoaded", () => {
  const isSearchPage = document.querySelector(".search-page") !== null;

  if (isSearchPage) {
    initEventListeners();
    getRecommendMovies();
  } else {
    getMovies();
  }
});

window.addEventListener("resize", () => {
  updateItemsPerView();
  showNextItems();
});

document.addEventListener("DOMContentLoaded", function () {
  movies();
});

document.addEventListener("DOMContentLoaded", function () {
  popular();
});

document.addEventListener("DOMContentLoaded", function () {
  series();
});

movies();
series();
popular();
