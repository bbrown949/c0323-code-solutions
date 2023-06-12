/* exported banMethods */

function banMethods(fn) {

    return '\\.' + method;
  }).join('|'), 'g');
  if (banned.test(fn.toString())) {
    throw new Error(`The following methods are banned for this problem: ${methods.join(', ')}`);
  }
}
