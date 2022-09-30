const facilityController = require('express').Router();


facilityController.get('/create', async(req, res) => {
     
    res.render('createFacility', {
        title: 'Create new Facility'
    })
});

facilityController.post('/create', async(req, res) =>{
    // take data from body
    // create model
    // profit
})
 
module.exports = facilityController