const express = require ('express')
const homeRoutes = require ('./routes/homeroutes')
const apiRoutes = require ('./routes/apiroutes')

const PORT = process.env.PORT || 3001;
const app= express()

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(apiRoutes);
app.use(homeRoutes);

//fires server into Port3001 or browser

app.listen(PORT, () => console.log (`App listening on port http://localhost:${PORT}`));