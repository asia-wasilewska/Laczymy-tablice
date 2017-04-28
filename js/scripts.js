var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
//połączenie 2 tablic:
var allNames = femaleNames.concat(maleNames);
//wyświetlenie wszystkich imion z 2 tablic:
console.log(allNames);
//dodanie nowej zmiennej z nowym imieniem:
var newName = 'Marian';
//warunek - jeśli imę jest nowe - dodajemy je, jeśli już jest w tablicy - odrzucamy je:
if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
}
else { console.log("Nie może być dodane - już jest w tablicy");
}
//wyświetlenie wszystkich imion razem z dodanymi:
console.log(allNames);