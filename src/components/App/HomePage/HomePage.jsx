import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'


function HomePage(){

    const picture = useSelector(store => store.gifs)
    const dispatch = useDispatch();
    const history = useHistory()
    let [search, setSearch] = useState('');
  
 
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
                    <input type='text' placeholder='Enter name' value={search}
                    onChange={(event) => {setSearch(event.target.value)} }/>
                    <span><button onClick={fetchGif}>search</button></span>
                </div>
                <section>
                    <h2> Here are your Images!</h2>
                    <div>
                        {picture.map((gif) => {
                            return(
                            <li key={gif.id}>
                            <img src={gif.images.original.url}/>
                            <button onClick={saveImageToReduxStore}>Add to favorites</button>
                            </li>
                            )
                        })}
                        Images go here
                    </div>
                   
                </section>
        </>
    )
}

export default HomePage;