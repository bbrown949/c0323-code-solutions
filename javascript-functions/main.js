function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds Exercise:', convertMinutesToSecondsResult);

function greet(name) {
  const greeting = 'Hey ' + name;
  return greeting;
}
const result = greet('Beavis');
console.log('greeting:', result);

function getArea(width, height) {
  return width * height;
}
const area = getArea(17, 42);
console.log('the area is:', area);

function getFirstName(person) {
  return person.firstName;
}
const firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('first name:', firstName);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}
const lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(lastElement);
