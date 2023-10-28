import dice from './icons/dice.png';
import plus from './icons/plus.png';
import playlist from './icons/playlist.png'
import leaderboard from './icons/leaderboard.png'

function PageHeader() {
    return(
        <div className="page-header">
            <h1 id="app-name">RATE-IFY</h1>
            <CircularButton id="leaderboard" src={leaderboard}></CircularButton>
            <CircularButton id="post" src={playlist}></CircularButton>
            <CircularButton id="discover" src={dice}></CircularButton>
        </div>
    )
}

function CircularButton(props) {
    return (
        <button className="circular-button" id={props.id}>
            <img className="button-icon" src={props.src}></img>
        </button>
    );
}

export default PageHeader;