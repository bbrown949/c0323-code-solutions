function ExampleConstructor() {}
console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

const anExampleConstructor = new ExampleConstructor();
console.log('anExampleConstructor:', anExampleConstructor);

const instanceExampleConstructor = anExampleConstructor instanceof Object;
console.log('instanceExampleConstructor:', instanceExampleConstructor);
