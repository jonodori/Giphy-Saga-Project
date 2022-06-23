import React from 'react';

function HomePage(){



    return(
        <>
            <div>
                <h1>Giphy Search!</h1>
                <div>
                    <button> View Favorites</button>
                </div>
            </div> 
                <div>
                    <input type='text' placeholder='Enter name'/>
                    <span><button>search</button></span>
                </div>
                <section>
                    <h2> Here are your Images!</h2>
                    <div>
                        Images go here
                    </div>
                </section>
        </>
    )
}

export default HomePage;