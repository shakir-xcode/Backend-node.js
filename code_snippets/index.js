
/*
const { spawn } = require('child_process');

const child = spawn('powershell.exe', ['Get-Service']);

child.stdout.on('data', (data) => {
  console.log(`Standard Output: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`Standard Error: ${data}`);
});

child.on('exit', (code) => {
  console.log(`Process exited with code ${code}`);
});

*/

const { exec } = require('child_process');

//const powershellCommand = 'java jv.java';

const powershellCommand = 'python py.py';

exec(`powershell.exe -Command "${powershellCommand}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing PowerShell command: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`PowerShell error: ${stderr}`);
    return;
  }

  console.log(`${stdout}`);
});
