const express = require("express");
const app = express();

const Knex = require('knex');
const knexConfig = require('./knexfile');
const Model = require('objection').Model;

const knex = Knex(knexConfig.development);
Model.knex(knex);

const server = app.listen(8080, (err) => {
    if(err){
        console.log(err);
    }

    console.log("Server is running on port ", server.address().port);
});