import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'




function HomePage(){
    const [picture, setPicture] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory()
    // useEffect(() => {
        //where you use your get reducer

    // } [],)

const getImage = () => {
        dispatch({
            type: 'ADD_IMAGE'
        })
    }
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
                    <input type='text' placeholder='Enter name'/>
                    <span><button onClick={getImage}>search</button></span>
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