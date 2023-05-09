/* exported yakko, wakko, dot */

let yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
};

let wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'
};

let dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
};

const warnerPrototype = {
  describe: function () {
    var description = this.name + ' is a ' +
      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

Object.setPrototypeOf(yakko, warnerPrototype);
Object.setPrototypeOf(wakko, warnerPrototype);
Object.setPrototypeOf(dot, warnerPrototype);
