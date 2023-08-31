'use strict';

const numbers = [];
let jatka = true;
while (jatka) {
  const number = prompt("Anna luku tai kirjoita 'stop' lopettaaksesi");
  if (number === 'stop') {
    alert('Lopetit ohjelman');
    jatka = false;
  }
  numbers.push(number);
}

console.log(numbers);

document.getElementById('kohde').innerHTML = 'Parilliset: ';
const parilliset = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    parilliset.push(number);
  }
}

if (parilliset.length > 0) {
  document.getElementById('kohde').innerHTML += parilliset.join(', ');
} else {
  document.getElementById('kohde').innerHTML += 'ei ole';
}
