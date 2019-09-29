const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding FEEDBACK: `, newFeedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback[0], newFeedback[1], newFeedback[2], newFeedback[3]])
        .then(result => {
        res.sendStatus(201);
        })
        .catch(error => {
        console.log(`Error adding new task`, error);
        res.sendStatus(500);
        });
});
//POST request that works with the Review.js Submit button to send feedback to the database

router.get('/', (req, res) => {
pool.query(`SELECT * FROM "feedback";`).then((result) => {
    res.send(result.rows);
}).catch((error) => {
    console.log('Error GET /feedback', error)
    res.sendStatus(500);
});
})
//GET request that sends feedback info to the Admin page from the database

module.exports = router;
