//--Adding Dependencies--
const express = require('express');
const path = require('path');
const api = require('./routes/api')

//--Setting up server--
const PORT = process.env.PORT || 3001;
const app = express();

//--Middleware--
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api' , api)
app.use(express.static("public"));

//--HTML routes--
app.get("/notes", (req , res) => {
    res.status(200).sendFile(path.join(__dirname, './public/notes.html'));
});

app.get("*", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './public/index.html'))
});


//--Listening address--
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);