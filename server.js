const express = require ('express') 
const homeRoutes = require ('./routes/homeroutes')
const apiRoutes = require ('./routes/apiroutes')


const PORT = process.env.PORT || 8080 
const app = express()   

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/api' ,apiRoutes);
app.use('/', homeRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`)
});