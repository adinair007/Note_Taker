//--Adding Dependencies--
const express = require("express");
const api = require("./routes/api");
const html = require("./routes/html");

//--Setting up server--
const PORT = process.env.PORT || 3001;
const app = express();

//--Middleware--
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);
app.use(html);

//--Listening address--
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
