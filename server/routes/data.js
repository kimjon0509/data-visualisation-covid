const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";

const express = require('express');
const app  = express();
const http = require('http')
const server = http.createServer(app)

const { Pool } = require('pg');

const db = new Pool({
  user: 'kimjon0509',
  password: '123',
  host: 'localhost',
  database: 'covid_db'
});


db.connect();


app.get("/reported_raw",(req, res) => {

    db.query(`
    SELECT * 
    FROM reported_raw
    `)
    .then(data => {
      res.send(data.rows)
    })

  });


server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});