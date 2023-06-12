/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  const studentFullName = this.firstName + ' ' + this.lastName;
  return studentFullName;
};

Student.prototype.getIntroduction = function () {
  const studentIntro = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  return studentIntro;
};
