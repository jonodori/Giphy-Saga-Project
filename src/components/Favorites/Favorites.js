
function FavoritesList() {


    function sendToServer (event){
        event.preventDefault();
        console.log('In send Server');
    }
    return (

        <div>
            <h1>Favorites</h1>
            {/* V Map images here V */}
            <form onSubmit={sendToServer}>
                <ul>
                    <li> FAVORITE GIFS HERE!!!???!! </li>
                    <select>
                        <option value="FUNNEY"> FUNNY
                        </option>
                        <option value="COHORT"> COHORT
                        </option>
                        <option value="CARTOON"> CARTOON
                        </option>
                        <option value="NSFW"> NSFW
                        </option>
                        <option value="MEME"> MEME
                        </option>
                    </select>
                </ul>

                <h2>SAVE IMAGE</h2>
                <button>Save Gif</button>
            </form>
        </div>
    );
}

export default FavoritesList;