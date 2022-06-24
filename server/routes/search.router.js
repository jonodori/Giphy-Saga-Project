const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


router.get('/:id', (req, res) => {

        const { id } = req.params

axios({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?api_key=q2J6sw2q0IixIXUTCUR3v1dQGuGAfipl&q=${id}&limit=10&offset=0&rating=g&lang=en`,
    
        
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