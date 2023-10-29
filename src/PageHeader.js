import dice from './pages/icons/dice.png';
import plus from './pages/icons/plus.png';
import playlist from './pages/icons/playlist.png'
import leaderboard from './pages/icons/leaderboard.png'
import {useNavigate} from "react-router";
import exit from './pages/icons/exit.png';
import { useAuth0 } from "@auth0/auth0-react";


function PageHeader() {
    const navigate = useNavigate();
    return(
        <div className="page-header">
            <h1 id="app-name" onClick={() => navigate("/")}>RATE-IFY</h1>
            <CircularButton id="leaderboard" src={leaderboard} onClick={()=>{ navigate("/leaderboard") }}></CircularButton>
            <CircularButton id="post" src={playlist} onClick={() => { navigate("/post") }}></CircularButton>
            <CircularButton id="discover" src={dice} onClick={() => { navigate("/discover") } }></CircularButton>
            <CircularLogOut id="logout" src={exit}></CircularLogOut>
        </div>
    )
}

function CircularButton(props) {
    return (
        <button className="circular-button" id={props.id} onClick={props.onClick}>
            <img className="button-icon" src={props.src}></img>
        </button>
    );
}

function CircularLogOut(props) {

    const { logout } = useAuth0();
    return (
        <button className="circular-button" id = {props.id} 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            <img className="button-icon" src={props.src}></img>
            <text>{props.text}</text>
        </button>
    );
}

export default PageHeader;