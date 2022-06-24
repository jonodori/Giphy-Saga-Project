const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();



router.get('/:searchBox', (req, res) => {
    console.log(req.params.searchBox)
    
axios({
    method: "GET",
    url: 'https://api.giphy.com/v1/gifs/search',
    params: {
        api_key: process.env.GIPHY_API_KEY,
        q: req.params.searchBox,
        limit: 5
    }

})
    .then(response => {
        // console.log(response);
        res.send(response.data);
    })
    .catch(err => {
        // console.error('No gifs for you', err);
        res.sendStatus(500);
    });

});


module.exports = router;