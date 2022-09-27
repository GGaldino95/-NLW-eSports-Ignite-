let string = 'CMXCIX';
let value = 0;

for (let i = 0; i < string.length; i++) {
  switch (string[i]) {
    case 'I':
      value += 1;
      break;
    case 'V':
      if (string[i - 1] === 'I') {
        value += 3;
      } else {
        value += 5;
      }
      break;
    case 'X':
      if (string[i - 1] === 'I') {
        value += 8;
      } else {
        value += 10;
      }
      break;
    case 'L':
      if (string[i - 1] === 'X') {
        value += 30;
      } else {
        value += 50;
      }
      break;
    case 'C':
      if (string[i - 1] === 'X') {
        value += 80;
      } else {
        value += 100;
      }
      break;
    case 'D':
      if (string[i - 1] === 'C') {
        value += 300;
      } else {
        value += 500;
      }
      break;
    case 'M':
      if (string[i - 1] === 'C') {
        value += 800;
      } else {
        value += 1000;
      }
      break;
  }
}

console.log(value);
