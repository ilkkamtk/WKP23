'use strict';

const movies = [];

let more = true;
while (more) {
  const title = prompt('Syötä elokuvan nimi');
  const rating = prompt('Syötä arvio (1-5)');
  const movie = {title, rating};
  movies.push(movie);
  more = confirm('Haluatko syöttää lisää');
}

/*
const movies = [
  {title: 'No Country for Old Men', rating: '2'},
  {title: 'Star Wars', rating: '4'},
  {title: 'Jaws', rating: '5'},
  {title: 'Uuno', rating: '1'},
];
*/

function sortMovies(a, b) {
  const vertailu = b.rating - a.rating;
  return vertailu;
}

movies.sort(sortMovies);

console.log(movies);
for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('kohde').append(tr);
}

document.getElementById('fav').innerText = movies[0].title;
