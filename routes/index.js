const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Brianna Hermansen!')
})

module.exports = routes