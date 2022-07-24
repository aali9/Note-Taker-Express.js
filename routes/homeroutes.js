const express = require ('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require ('path')

router.get('/notes',(req, res) =>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
 })

 router.get('*',(req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
 })

 module.exports = router