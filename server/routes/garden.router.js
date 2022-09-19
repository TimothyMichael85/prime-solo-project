const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route all gardens
  const queryText = `
  SELECT * FROM "garden"
  WHERE  "user_id" = ${req.user.id}
  ORDER BY "garden_id" ASC;`;
  pool.query(queryText)
  .then ( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.error('Error: GET all gardens', err)
  })
});
//

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log(req.body);
  // POST route code here
  const queryText = `
  INSERT INTO "garden" ("user_id", "garden_name")
  VALUES ($1, $2)
  RETURNING "garden_id";`;

  const queryValues = [req.user.id, req.body.garden_name]

  pool.query(queryText, queryValues)
  .then (result => {
    res.sendStatus(201)
  }).catch( error => {
    console.error(error);
    res.sendStatus(500)
  })
});

//Delete a garden
router.delete ('/:id', (req,res) => {
  const queryText = `
  DELETE FROM "garden"
  WHERE "garden_id" = $1;`;
  const queryValue = [req.params.id]
  pool.query(queryText, queryValue)
  .then( result => {
    res.sendStatus(204)
  }).catch( error => {
    console.error(error);
    res.sendStatus(500)
  })
});

module.exports = router;