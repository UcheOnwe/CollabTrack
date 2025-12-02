// Server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Allow Express to read form data (for POST /echo)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    const {email, password } = req.body;
    // Logic
    res.send('Login attempt received: ${email}');
});

//  Start the server and keep it running
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
