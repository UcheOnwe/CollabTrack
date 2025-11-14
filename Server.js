// Server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Allow Express to read form data (for POST /echo)
app.use(express.urlencoded({ extended: false }));

// GET /  --> show home.ejs
app.get('/', (req, res) => {
  res.render('home');   // looks for Views/home.ejs
});

// POST /echo  --> handle the form submit from home.ejs
app.post('/echo', (req, res) => {
  const msg = req.body.msg || 'empty';
  res.send(`You posted: <b>${msg}</b>`);
});

//  Start the server and keep it running
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
