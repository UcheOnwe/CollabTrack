const express = require('express');
const app = express();
const PORT = 3000;

//Hardcode User Authentication Testing
const usersList = [
  {email: "test1@gmail.com", password: "123456"}
];

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
    
    // Find a matching user
    const matchingAccount = usersList.find(currentAccount => currentAccount.email === email);

    if (!matchingAccount) {
      return res.send ("Email not found");
    }

    if (matchingAccount.password !== password) {
      return res.send("Incorrect password. ")
    }
    res.render('home', { email});
});

//  Start the server and keep it running
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
