import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

const axios = require('axios');
import {useState} from 'react';






import { useHistory } from 'react-router-dom'




function HomePage(){
    const [picture, setPicture] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory()
    
    
    let [search, setSearch] = useState('');
  
    


    useEffect(() => {
       fetchGif



    const fetchGif = () => {

        dispatch({
            type: 'FETCH_GIF',
            payload: search
           }) 
           
    }

     

    // const getImage = () => {
    //     dispatch({
    //         type: 'ADD_IMAGE'
    //     })
    // }

    

const sendToFavorites = () => {
    history.push('/favorites')
}
const saveImageToReduxStore = () => {
    console.log(' Inside saveImageToReduxStore');
}


    return(
        <>
            <div>
                <h1>Giphy Search!</h1>
                <div>
                    <button onClick={sendToFavorites}> View Favorites</button>
                </div>
            </div> 
                <div>
                    <input type='text' placeholder='Enter name' 
                    onChange={(event) => {setSearch(event.target.value)} }/>
                    <span><button onClick={fetchGif}>search</button></span>
                </div>
                <section>
                    <h2> Here are your Images!</h2>
                    <div>
                    
                        Images go here
                    </div>
                    <button onClick={saveImageToReduxStore}>Add to favorites</button>
                </section>
        </>
    )
}

export default HomePage;