const express = require('express');
const router = express.Router();

const message = [
    {
        text: "hi there",
        user: "Jack",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Emily",
        added: new Date()
    }
]


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Mini Messageboard', message: message});
});

/* POST message */
router.post('/new', (req, res, next) => {
    message.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()})
    // send user back to homepage
    res.redirect('/')
})

module.exports = router;
