//simple express server to run our production environment
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port=process.env.PORT || 3000;

app.use(express.static(publicPath)); //this specify that expres server should server the static assets from the public folder

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'Index.html')); //for every endpoint use index.html to send response
});

app.listen(port, () => {
  console.log('Server is up!');
});
