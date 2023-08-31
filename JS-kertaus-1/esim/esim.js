function grow(array) {
  const uusiTaulukko = [...array];
  for (let i = 0; i < uusiTaulukko.length; i++) {
    uusiTaulukko[i]++;
  }
  return uusiTaulukko;
}

const numbers = [5, 6, 7];
const tulos = grow(numbers);
console.log(numbers[0] + ' ' + numbers[1] + ' ' + numbers[2]);
console.log(tulos[0] + ' ' + tulos[1] + ' ' + tulos[2]);
