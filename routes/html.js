//--Adding Dependencies--
const router = require("express").Router();
const path = require("path");

//--HTMl routes--
router.get("/notes", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;