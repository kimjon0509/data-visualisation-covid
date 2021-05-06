const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/reported_raw",(req, res) => {

    db.query(`
    UPDATE reported_raw 
    SET recovered = 0 
    WHERE recovered IS NULL;
    ')

    .then(data => {

      console.log(data.rows)

      res.send(data.rows)

    })

  })
}
