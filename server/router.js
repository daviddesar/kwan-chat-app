const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("App connected")
});

module.exports = router;