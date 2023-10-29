import {Router, useNavigate} from "react-router";
import dice from './icons/dice.png';
import playlist from './icons/playlist.png'
import leaderboard from './icons/leaderboard.png'
import exit from './icons/exit.png'
import LogOutButton from ".";
function HomePage() {
    const navigate = useNavigate()
    return (
        <div>
            <text id ="BIG_HOME_APP_NAME">RATE-IFY</text>
            <HomeButton id="home_leaderboard" src={leaderboard} onClick={()=>{ navigate("/leaderboard") }} text = "LEADERBOARD"></HomeButton>
            <HomeButton  id="home_post" src={playlist} onClick={() => { navigate("/post")}}text = "POST A PLAYLIST"></HomeButton>
            <HomeButton  id="home_random" src={dice} onClick={() => { navigate("/discover") } } text = "RATE A PLAYLIST"></HomeButton>
            <LOGOUT id="home_logout" src={exit} onClick={()=>{ navigate("/leaderboard") }} text = "LOGOUT"></LOGOUT>
        </div>
    )
}

function HomeButton(props) {
    return (
        <button className="rounded_button" id={props.id} onClick={props.onClick}>
            <img className="not_round_button_icon" src={props.src}></img>
            <text>{props.text}</text>
        </button>
    );
}

function LOGOUT(props) {
    return (
        <button className="rounded_button" id = {props.id} onClick={LogOutButton.onClick}>
            <img className="not_round_button_icon" src={props.src}></img>
            <text>{props.text}</text>
        </button>
    );
}


export default HomePage;