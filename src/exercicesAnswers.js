//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function (days) {
  return days=['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
}

//Exercice 2 : Retouner le 3ème élément du tableau days', function() {
let returnThirdElement = function (days) {
  return days[2];
}

//Exercice 3 : Afficher la valeur de l\'index 3 du tableau days.', function() {
let returnThirdIndex = function (days) {
  return days[3];
}

//Exercice 4 : Changer le 2ème élément du tableau languages par php.', function() {
let changeSecondElement = function (languages) {
  console.log(languages)
  return languages.valueOf(languages.splice(1, 1, 'php'));
  return languages.splice(1, 1, 'php');
}

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.', function() {
let addAtTheEnd = function (languages) {
  console.log(languages)
  return languages.valueOf(languages.push('ruby', 'python'));
  return languages.push('ruby', 'python');
}

//Exercice 6 : Ajouter html et css au début du tableau languages.', function() {
let addAtFirst = function (languages) {
  console.log(languages)
  return languages.valueOf(languages.unshift('html', 'css'));
  return languages.unshift('html', 'css');
}

//Exercice 7 : Supprimer le premier élément du tableau languages.', function() {
let removeFirstElement = function (languages) {
  console.log(languages)
  return languages.valueOf(languages.shift());
  return languages.shift();
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.', function() {
let removeLastElement = function (languages) {
  console.log(languages)
  return languages.valueOf(languages.pop());
  return languages.pop();
}

//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
let createPerson = function (person) {
  console.log(person)
  person = [];
  person['name'] = 'Jean';
  person['age'] = 45;
  person['city'] = 'Paris';
  return person;
  return person.push['name', 'age', 'city'], person[0] = 'Jean', person[1] = '45', person[3] = 'Paris';
}

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.', function() {
let returnName = function (person) {
  return person['name'];
}

//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
let returnSentence = function (person) {
  console.log(person)
  return person = `Bonjour, je suis ${person['name']}. J'ai ${person['age']} ans et j'habite ${person['city']}.`;
  return person = 'Bonjour, je suis ' + person['name'] + '. J\'ai ' + person['age'] + ' ans et j\'habite ' + person['city'] + '.';
}

//Exercice 12 : Transformer la variable string en tableau.', function() {
let returnArray = function (string) {
  console.log(string)
  return string.split(',');
}

//Exercice 13 : Trier le tableau array.', function() {
let sortArray = function (array) {
  return array.sort();
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
let returnString = function (array) {
  return array.join();
}
