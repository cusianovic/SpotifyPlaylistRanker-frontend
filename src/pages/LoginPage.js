import {Router, useNavigate} from "react-router";
import leaderboard from './icons/leaderboard.png'
import login from './icons/login.png'
import { useAuth0 } from "@auth0/auth0-react";


function HomePage() {
    const navigate = useNavigate()
    return (
        <div>
            <text id ="BIG_HOME_APP_NAME">RATE-IFY</text>
            <HomeButton id="home_leaderboard" src={leaderboard} onClick={()=>{ navigate("/leaderboard") }} text = "LEADERBOARD"></HomeButton>
            <LOGIN className = "rounded_button" id="login_button" src={login} text = "LOGIN"></LOGIN>
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

function LOGIN(props) {
    const { loginWithRedirect } = useAuth0();
    return (
        <button className="rounded_button" id = {props.id}
        onClick={() => loginWithRedirect()}>
            <img className="not_round_button_icon" src={props.src}></img>
            <text>{props.text}</text>
        </button>
    );
}


export default HomePage;