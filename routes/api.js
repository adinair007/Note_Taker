const router = require("express").Router();
const fs = require("fs");
const util = require("util");

//--Handling asynchronous processes--
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//--GET REQUEST--
router.get("/notes", (req, res) => {
  readFileAsync("./db/db.json", "utf8").then((data) => {
    const notes = [].concat(JSON.parse(data));
    res.json(notes);
  });
});

//--POST REQUEST--
router.post("/notes", (req, res) => {
  const newNote = req.body;
  readFileAsync("./db/db.json", "utf8")
    .then((data) => {
      const notes = [].concat(JSON.parse(data));
      newNote.id = notes.length + 1;
      notes.push(newNote);
      return notes;
    })
    .then((notes) => {
      writeFileAsync("./db/db.json", JSON.stringify(notes));
      res.json(newNote);
    });
});

//--DELETE REQUEST
router.delete("/notes/:id", (req, res) => {
  const idDelete = parseInt(req.params.id);
  readFileAsync("./db/db.json", "utf-8")
    .then((data) => {
      const notes = [].concat(JSON.parse(data));
      const newData = [];
      for (let i = 0; i < notes.length; i++) {
        if (idDelete !== notes[i].id) {
          newData.push(notes[i]);
        }
      }
      return newData;
    })
    .then((notes) => {
      writeFileAsync("./db/db.json", JSON.stringify(notes));
      res.send("Saved!");
    });
});

module.exports = router;
