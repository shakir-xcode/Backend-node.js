const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('enter dsome')
rl.question('', (userInput) => {
  console.log('you entered 1 :', userInput)
  rl.close();
});

console.log('enter other thing')
rl.question('', (userInput) => {
  console.log('you entered  2:', userInput)
  rl.close();
});