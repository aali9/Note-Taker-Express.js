const router = require("express").Router();
const fs = require("fs");
const uniqueid = require("uniqueid");

router.get("/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});
// adds note to arrays of objects in db.json

router.post("/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const db = JSON.parse(data);
    req.body.id = uniqueid();
    db.push(req.body);
    fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
      res.json(db);
    });
  });
});

// remove from array of objects

router.delete("/notes/:id", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const dbData = JSON.parse(data);
    const noteId = req.params.id;

    for (let i = 0; i < dbData.length; i++) {
      if (noteId === dbData[i].id) {
        dbData.splice([i], 1);
        fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
          if (err) throw err;
          res.json(db);
        });
      }
    }
  });
});

module.exports = router;
