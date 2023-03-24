/* exported getStudentNames */
function getStudentNames(students) {
  const input = [];
  for (let i = 0; i < students.length; i++) {
    input.push(students[i].name);
  }
  return input;
}
