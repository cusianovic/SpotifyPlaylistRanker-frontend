import up from "./icons/up.svg";
import down from "./icons/down.svg"
import PageHeader from "../PageHeader";
import { Spotify } from "react-spotify-embed";

function PostViewer() {
    return (
        <div>
            <PageHeader></PageHeader>
            <Spotify id ="embed-placeholder" link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" height={"10px"}/>
            <InteractionButton id = "upvote" src ={up}></InteractionButton>
            <InteractionButton id = "downvote" src ={down}></InteractionButton>
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