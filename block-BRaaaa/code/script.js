let root = document.querySelector(".app");
let input = document.querySelector(".input");
let moviesList = document.querySelector(".movies-list");
let movies = [];

function render() {
  moviesList.innerHTML = "";
  movies.forEach((movie, index) => {
    let div = document.createElement("div");
    div.setAttribute("data-index", index);
    let h2 = document.createElement("h2");
    h2.innerText = movie.name;
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = movie.isWatched ? "Watched" : "To watch";
    div.append(h2, btn);
    moviesList.append(div);
  });
}

render();

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    movies.push({
      name: input.value,
      isWatched: false,
    });
    console.log(movies);
    render();
    input.value = "";
  }
  //   console.log(e);
});

moviesList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    movies = movies.map((movie, index) => {
      if (index == e.target.parentElement.dataset.index) {
        return { ...movie, isWatched: !movie.isWatched };
      } else {
        return movie;
      }
    });
    render();
  }
});
