const express = require('express')
const router = express.Router()

/* GET new page. */
router.get('/', (req, res, next) => {
    res.render('form')
})


module.exports = router