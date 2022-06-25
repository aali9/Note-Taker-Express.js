const router = require ('express').Router()
const fs = require ('fs')
const uniqueid = require ('uniqueid')

router.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data)=>{
        if (err) throw err
        return res.json(JSON.parse(data))

    })

})
// adds note to arrays of objects in db.json

router.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data)=>{
        if (err) throw err
        const db = JSON.parse(data)
        req.body.id = uniqueid()
        db.push(req.body)
        fs.writeFile('db/db.json',JSON.stringify(db), (err)=>{
            if (err) throw err 
            res.json (db)
        })
    })
})

