'use strict';

const sivuA = +prompt('Anna kolmion ensimmäisen sivun pituus');
const sivuB = +prompt('Anna kolmion toisen sivun pituus');
const sivuC = +prompt('Anna kolmion kolmannen sivun pituus');

let tyyppi = '';

if (sivuA === sivuB && sivuB === sivuC) {
  // jos sivut ovat kaikki yhtä pitkiä -> tasasivuinen kolmio
  tyyppi = 'tasasivuinen kolmio';
} else if (sivuA === sivuB || sivuA === sivuC || sivuB === sivuC) {
  // jos kaksi sivua ovat yhtä pitkiä -> tasakylkinen kolmio
  tyyppi = 'tasakylkinen kolmio';
} else {
  // jos sivut ovat kaikki eri pituiset -> epäsäännöllinen kolmio
  tyyppi = 'epäsäännöllinen kolmio';
}

document.getElementById('kohde').insertAdjacentHTML('beforeend', tyyppi);
