const router = require ('express').Router()
const fs = require ('fs')
const uniqid = require ('uniqid')

router.get('/api/notes',(req, res)=> {
    fs.readFile('db/db.json', 'utf8', (err,data)=>{
        if(err) throw err
        return res.json(JSON.parse(data))
    })
})

router.post ('/api/notes', (req, res)=> {
    fs.readFile('db/db.json', 'utf8', (err,data)=>{
        if(err) throw err
        const db = JSON.parse(data)
        req.body.id = uniqid()
        db.push(req.body)
        fs.writeFile('db/db.json',JSON.stringify(db) , (err)=> {
            if (err) throw err 
            res.json (db)
        })
    })
})


router.delete ( '/api/notes/:id', (req, res) => {
fs.readFile('db/db.json', 'utf8', (err,data)=>{
    if(err) throw err
    const notesId = req.params.id 
    const db = JSON.parse(data)
    for (let i = 0; i < db.length; i++){
        if (notesId=== db[i].id){
            db.splice([i],1)
            fs.writeFile('db/db.json', JSON.stringify(db), (err)=>{
                if(err) throw err
                res.json (db)
            })
        }
    }

})


})




module.exports = router