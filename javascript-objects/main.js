const student = {
  firstName: 'Bryan',
  lastName: 'Brown',
  age: '36'
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('the value of fullName is:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'marketing';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
const vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2021
};
vehicle['color'] = 'white';
vehicle['isConvertable'] = false;
console.log('the value of vehicle ["color"] is:', vehicle['color']);
console.log('the value of ["isConvertable"] is:', vehicle['isConvertable']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Buddy',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
