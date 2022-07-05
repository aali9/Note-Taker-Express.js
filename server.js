const express = require ("express");
const fs = require ("fs");
const homeRoutes = require ("./routes/homeRoutes");
const apiRoutes = require ("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;

const app= express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(apiRoutes);
app.use(homeRoutes);

app.listen(PORT, () => {
    console.log (`App listening on port http://localhost:${PORT}`);
});