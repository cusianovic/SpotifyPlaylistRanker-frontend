import {useState} from 'react';
import PageTitle from "../PageTitle";

function PostPopup() {

    const [spotifyURL, setSpotifyURL] = useState("");
    const [description, setDescription] = useState("");

    
    // TODO
    
    async function handleSubmit(e){
        e.preventDefault();
        console.log(spotifyURL);
        let ID = spotifyURL.substring(spotifyURL.lastIndexOf('/') + 1);
        let response = await fetch(`http://localhost:3001/api/upload`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "playlistURL": ID,
                "description": description
            })
    }).then(response => {
        return response;
    });

    }



    return (
        <div className="post-popup">
            <PageTitle text="UPLOAD PLAYLIST"></PageTitle>
            <form onSubmit={handleSubmit}>
                <input className="bordered-elem" id="url" type="text" onChange={(e)=>{setSpotifyURL(e.target.value) }}></input>
                <textarea className="bordered-elem" id="description" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                <input type="submit" className="bordered-elem" id="submit-button" value="SUBMIT"></input>
            </form>
        </div>
    );

}

// TODO



export default PostPopup;