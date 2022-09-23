const router = require('express').Router()

router.get('/catalog', (res, res) => {
    res.render('catalog', {
        title: 'All Accomodation'
    });
});

router.get('/catalog:id', (res, res) => {
    res.render('details', {
        title: 'Accomodation Details'
    });
});

 module.exports = router