const readline = require('readline');
const { spawn } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// // Prompt the user for input
// rl.question('Enter something: ', (userInput) => {
//   console.log('You entered:', userInput);

//   // Close the interface
//   rl.close();
// });

// // Listen for the close event
// rl.on('close', () => {
//   console.log('Input reading completed.');
// });


// Spawn the Python interpreter
const pythonProcess = spawn('powershell.exe', ['python py.py']);

// Listen for Python process output
pythonProcess.stdout.on('data', (data) => {
    console.log(`${data}`);
});

pythonProcess.stderr.on('data', (data) => {
    console.error(`${data}`);
});

// Provide input to the Python process (simulate user input)
rl.question('', (userInput) => {
    pythonProcess.stdin.write(userInput);
    pythonProcess.stdin.end();
    rl.close();
});

// rl.question('', (userInput) => {
//     pythonProcess.stdin.write(userInput);
//     pythonProcess.stdin.end();
//     rl.close();
// });

// pythonProcess.stdin.write('John\n');
// pythonProcess.stdin.write('25\n');

// Close the stdin stream to signal the end of input
// pythonProcess.stdin.end();

// Listen for Python process termination
pythonProcess.on('close', (code) => {
    console.log(`process exited ${code}`);
});
