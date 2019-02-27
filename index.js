const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/mobi', async (req, res) => {
  let kindlegen;
  try {
    kindlegen = await spawn(path.resolve('./kindlegen'), [path.resolve('./test.epub'), '-verbose', '-o', 'output.mobi']);
    
    kindlegen.on('close', (code) => {
      res.send(path.resolve('./output.mobi'));
      console.log(`child process exited with code ${code}`);
    });

  } catch (e) {
    console.log(e);
  }

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);