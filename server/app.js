const express = require("express");
const app = express();
const path = require("path");

const Knex = require('knex');
const knexConfig = require('./knexfile');
const Model = require('objection').Model;

const knex = Knex(knexConfig.development);
Model.knex(knex);

app.get("/backend", (req, res) => {
    /* res.sendFile(path.join(__dirname + "/../client/public/index.html")); */
    res.send({ express: 'The backend is now connected to React' });
});

const server = app.listen(8080, (err) => {
    if(err){
        console.log(err);
    }

    console.log("Server is running on port ", server.address().port);
});
