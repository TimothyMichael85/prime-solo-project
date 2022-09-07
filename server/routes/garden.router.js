const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route all gardens
  const queryText = `SELECT * FROM "garden" ORDER BY "garden_id" ASC;`;
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
  // POST route code here
});

module.exports = router;