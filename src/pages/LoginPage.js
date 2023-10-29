import {Router, useNavigate} from "react-router";
import dice from './icons/dice.png';
import playlist from './icons/playlist.png'
import leaderboard from './icons/leaderboard.png'
import exit from './icons/exit.png'

function HomePage() {
    const navigate = useNavigate()
    return (
        <div>
            <text id ="BIG_HOME_APP_NAME">RATE-IFY</text>
            <HomeButton id="home_leaderboard" src={leaderboard} onClick={()=>{ navigate("/leaderboard") }} text = "LEADERBOARD"></HomeButton>
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




export default HomePage;