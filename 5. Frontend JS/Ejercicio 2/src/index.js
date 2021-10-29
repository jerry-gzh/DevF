import "bootstrap";
import "./style.scss";
import axios from "axios";
const URI = "https://ghibliapi.herokuapp.com/films";
const rowMovies = document.getElementById("row-movies");
let peliculas;

function createCard(pelicula) {
  const infoMovie = pelicula;
  const card = document.createElement("div");
  card.className = "card col-3 mb-4 p-4";
  card.setAttribute("data-bs-toggle", "modal");
  card.setAttribute("data-bs-target", "#modalOfDetails");
  const h5 = document.createElement("h5");
  h5.innerText = infoMovie.title;
  h5.className = "card-title";
  const image = document.createElement("img");
  image.src = infoMovie.image;
  image.className = "card-img-top image-card";
  card.appendChild(h5);
  card.appendChild(image);
  card.addEventListener("click", () => populateModal(pelicula));
  rowMovies.appendChild(card);
}

function getPersonajes(url, divPersonajes) {
  axios.get(url).then((response) => {
    const personaje = document.createElement("p");
    personaje.innerText = response.data.name;
    divPersonajes.appendChild(personaje);
  });
}
function populateModal(infoMovie) {
  const divPersonajes = document.getElementById("div-personajes");
  divPersonajes.innerHTML = "";
  const titleModal = document.getElementById("modalTitle");
  titleModal.innerText = infoMovie.title;
  //let imgMovie = document.getElementById("imageModal");
  //imgMovie.src = infoMovie.movie_banner;
  let description = document.getElementById("descriptionModal");
  description.innerText = infoMovie.description;
  let director = document.getElementById("director");
  director.innerText = "Director: " + infoMovie.director;
  let date = document.getElementById("date");
  date.innerText = "Fecha de salida: " + infoMovie.release_date;
  infoMovie.people.forEach((url) => {
    getPersonajes(url, divPersonajes);
  });
}
//Obtener las peliculas
axios
  .get(URI)
  .then((response) => {
    console.log(response.status); // STATUS PETICION
    console.log(response.data); // INFO POKEMON

    if (response.status === 200) {
      peliculas = response.data;
      for (let i = 0; i < peliculas.length; i++) {
        createCard(peliculas[i]);
      }
    } else {
      error = `<h1> NO SE ENCONTRÓ INFORMACIÓN DE LAS PELÍCULAS </h1>`;
      rowMovies.innerHTML = error;
    }
  })
  .catch((e) => {
    console.log(e);
  });

// FILTRAR PELÍCULAS
const input = document.getElementById("input-pelicula");
let value;

input.addEventListener("input", (e) => {
  value = e.srcElement.value.toLowerCase();
  rowMovies.innerHTML = "";
  let peliculasFiltradas = peliculas.filter((item) =>
    item.title.toLowerCase().includes(value)
  );
  peliculasFiltradas.map((infoMovie) => {
    createCard(infoMovie);
  });
});