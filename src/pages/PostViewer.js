import up from "./icons/up.svg";
import down from "./icons/down.svg"
import PageHeader from "../PageHeader";
import { Spotify } from "react-spotify-embed";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import dice from "./icons/dice.png"
import { Navigate } from "react-router";
import { useNavigate } from "react-router";


function PostViewer(props) {
    
    const navigate = useNavigate();
    const [playlist, setPlaylist] = useState();
    const [isLoading, setLoading] = useState(true);
    const [reacted, setReacted] = useState(false);

    const { user } = useAuth0();


    function upvote(){
        async function AJAX(URL, body){
            let response = await fetch(URL, {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(body)
            }).then(e => {
                console.log("yipee!")
                let vals = playlist;
                if(e.json().status != -1) vals.upvotes++;
                return vals;
            });
            console.log(response);
            setPlaylist(response);
            setReacted(true);
        }

        AJAX("http://localhost:3001/api/upvote",{
            "user": user.email,
            "playlistID": playlist.playlistid
        })
    }

    function downvote(){
        async function AJAX(URL, body){
            let response = await fetch(URL, {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(body)
            }).then(e => {
                let vals = playlist;
                if(e.json().status != -1) vals.downvotes++;
                return vals;
            });
            setPlaylist(response);
            setReacted(true);
        }

        AJAX("http://localhost:3001/api/downvote",{
            "user": user.email,
            "playlistID": playlist.playlistid
        })
    }

    useEffect(()=>{}, [reacted]);

    useEffect(() =>{

        async function AJAX(URL, valueHandler){
            let response = await fetch(URL, {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
            }).then(e => {
                console.log("yipee!")
                return e.json();
            });
            console.log(response);
            setPlaylist(response);
            return response;
        }

        async function AJAX2(URL, body){
            let response = await fetch(URL, {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(body)
            }).then(e => {
                console.log("yipee!")
                return e.json();
            });
            console.log(response);
            setReacted(response.seen);
        }


 

        AJAX("http://localhost:3001/api/getRandom").then((e) => {
            AJAX2("http://localhost:3001/api/viewed", {
                "user": user.email,
                "playlistID": e.playlistid
            }).then(() => {
                
            });
            return setLoading(false);
        });


    }, [isLoading])



    if(isLoading) return(
        //TODO: LOADING SCREEN
        <></>
    );
    return (
        <div>
            <PageHeader></PageHeader>
            <Spotify className = "bordered-elem" id ="embed-placeholder" link={`https://open.spotify.com/playlist/${playlist.playlistid}`} height={"10px"}/>
            <InteractionButton id = "upvote" src ={up} onClick={upvote}></InteractionButton>
            <InteractionButton id = "downvote" src ={down} onClick={downvote}></InteractionButton>
            <text className="results" id = "fire-results" style={{visibility: reacted ? "visible" : "hidden"}}>{playlist.upvotes}</text>
            <text className="results" id = "trash-results" style={{visibility: reacted ? "visible" : "hidden"}}>{playlist.downvotes}</text>
            <text id = "post-info">Playlist name: Worlds <br></br>
            {playlist.description}
            </text>
            <button className="rounded_button" id="try_again" style={{visibility: reacted ? "visible" : "hidden"}} onClick={() => { setLoading(true) } }>
            <img className="not_round_button_icon" src={dice}></img>
            <text>RATE ANOTHER PLAYLIST</text>
        </button>
        </div>
    );
}

function InteractionButton(props) {
    return (
        <button className="bordered-elem" id={props.id} onClick={props.onClick}>
            <img className="button-icon" src={props.src}></img>
        </button>
    )
}



export default PostViewer;