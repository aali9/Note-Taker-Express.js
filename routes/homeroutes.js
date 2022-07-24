const express = require ('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require ('path')

router.get('/notes',(_req, res) =>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
 })

 router.get('*',(_req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
 })

 module.exports = router