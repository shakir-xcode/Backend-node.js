const express = require('express');

const router = express.Router();


router.use((req, res, next) => {
    console.log('time : ', Date.now());
    next();
})

router.get('/', (req, res) => {
    res.send('Birds page...');
})


router.get('/about', (req, res) => {
    res.send('this is about Birds page...');
})

module.exports = router;