import {useState} from 'react';
import PageTitle from "../PageTitle";
import PageHeader from '../PageHeader';
import { placeholder } from '@babel/types';

function PostPopup() {

    const [spotifyURL, setSpotifyURL] = useState("Ener");
    const [description, setDescription] = useState("");
    const [playlistname, setPlaylistName] = useState("")
    
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
                "description": description,
                "name": playlistname
            })
    }).then(response => {
        return response;
    });

    }



    return (

        <div>
            <PageHeader></PageHeader>

            <PageTitle text="UPLOAD PLAYLIST"></PageTitle>
            <form onSubmit={handleSubmit}>
                <input className="bordered-elem" id="playlist-name" type="text" onChange={(e)=>{setPlaylistName(e.target.value)}} placeholder='Name of playlist'></input>
                <input className="bordered-elem" id="url" type="text" onChange={(e)=>{setSpotifyURL(e.target.value) }} placeholder='Spotify playlist URL'></input>
                <textarea className="bordered-elem" id="description" onChange={(e)=>{setDescription(e.target.value)}} placeholder='Description of playlist'></textarea>
                <input type="submit" className="bordered-elem" id="submit-button" value="SUBMIT"></input>
            </form>
        </div>
    );

}

// TODO



export default PostPopup;