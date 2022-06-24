const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


router.get('/', (req, res) => {

axios({
    method: "GET",
    url: 'https://api.giphy.com/v1/gifs/search',
    params: {
        api_key: process.env.GIPHY_API_KEY,
        q: 
        limit: 5
    }
})
    .then(response => {
        console.log(response);
        res.send(response.data);
    })
    .catch(err => {
        console.error('No gifs for you', err);
        res.sendStatus(500);
    });

});


module.exports = router;