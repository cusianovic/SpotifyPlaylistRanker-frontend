import up from "./icons/up.svg";
import down from "./icons/down.svg"
import PageHeader from "../PageHeader";

function PostViewer() {
    return (
        <div>
            <PageHeader></PageHeader>
            <textarea className = "bordered-elem" id = "embed-placeholder"></textarea>
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