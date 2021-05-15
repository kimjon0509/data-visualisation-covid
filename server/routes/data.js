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

app.get("/outbreak_raw",(req, res) => {

  db.query(`
  SELECT * 
  FROM outbreak_raw
  `)
  .then(data => {
    res.send(data.rows)
  })

});

app.get("/figure1", (req, res) => {
  db.query(`
  SELECT reported_date,
       UNNEST(ARRAY ['recovered', 'active', 'deceased']) AS key,
       UNNEST(ARRAY [recovered, active, deceased]) AS count
  FROM reported_raw
  `)
  .then(data => {
    res.send(data.rows)
  })
});

app.get("/figure2",(req, res) => {

  db.query(`
  SELECT episode_week, outbreak_or_sporadic ,
  SUM(cases) AS total_cases
  FROM outbreak_raw
  GROUP BY 
    episode_week,
    outbreak_or_sporadic
  ORDER BY episode_week ASC
  `)
  .then(data => {
    res.send(data.rows)
  })

});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});