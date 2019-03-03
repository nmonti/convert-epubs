const express = require('express');
const path = require('path');
const { spawn } = require('child_process'); 

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/convert', async (req, res) => {
  let kindlegen;
  try {
    kindlegen = await spawn('./kindlegenu', ['./test.epub', '-verbose', '-o', 'output.mobi']);
    
    kindlegen.on('close', (code) => {
      console.log(path.resolve('./output.mobi'))
      res.send(path.resolve('./output.mobi'));
      console.log(`child process exited with code ${code}`);
    });

  } catch (e) {
    console.log(e); 
  }

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);