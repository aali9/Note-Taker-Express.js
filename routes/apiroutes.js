const router = require ("express").Router();
const fs = require ("fs");
const uniqid = require ("uniqid");

router.get("/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8",  function(err,data) {
        if(err) throw err;

        return res.json(JSON.parse(data));
    });
});

router.post ("/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function (err,data) {
        if(err) throw err;

        let raw = JSON.parse(data);
        raw.push ({...req.body, id:uniqid ()});

        fs.writeFile("./db/db.json",JSON.stringify(raw) , function (err) {
            if (err) throw err;
            
            console.log("success");
        });
    });
res.end ();

});


router.delete ( "/notes/:uniqid", function (req, res) {
    let id = req.params.id;

fs.readFile("./db/db.json", "utf8", function (err,data){
    if(err) throw err;
    
    let raw = JSON.parse(data);

    for (let i = 0; i < raw.length; i++){
        if (id=== raw[i].id){
            raw.splice(i,1);

            fs.writeFile("./db/db.json", JSON.stringify(raw), function(err){
                if(err) throw err;

                console.log("note deleted");

            });
        }
    }
});
                
res.end();

});
       

module.exports = router;