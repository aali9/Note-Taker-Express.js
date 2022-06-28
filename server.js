const express = require ('express')
const homeRoutes = require ('./routes/homeroutes')
const apiRoutes = require ('./routes/apiroutes')
const path = require("path")

const PORT = process.env.PORT || 3001;
const app= express()

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/api',apiRoutes);
// app.use('/api',homeRoutes);

app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})


app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

//fires server into Port3001 or browser

app.listen(PORT, () => console.log (`App listening on port http://localhost:${PORT}`));