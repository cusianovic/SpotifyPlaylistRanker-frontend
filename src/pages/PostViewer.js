import up from "./icons/up.svg";
import down from "./icons/down.svg"
import PageHeader from "../PageHeader";
import { Spotify } from "react-spotify-embed";

function PostViewer() {
    return (
        <div>
            <PageHeader></PageHeader>
            <Spotify className = "bordered-elem" id ="embed-placeholder" link="https://open.spotify.com/album/7AJPV0L05IyIBid97AvwVD?si=doNPeZQ_Re-QGvrLNaNCaA" height={"10px"}/>
            <InteractionButton id = "upvote" src ={up}></InteractionButton>
            <InteractionButton id = "downvote" src ={down}></InteractionButton>
            <text id = "post-info">Playlist name: Worlds <br></br>
            This is a description of the given playlist. 
            Users will be able to add additional context for the voters to consider before they make their decision.</text>
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