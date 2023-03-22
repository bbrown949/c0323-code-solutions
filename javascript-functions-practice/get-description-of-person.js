/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const personDescription = person.name + ' ' + 'is a' + ' ' + person.occupation + ' ' + 'from' + ' ' + person.birthPlace + '.';
  return personDescription;
}
