import up from "./icons/up.svg";
import PageHeader from "./PageHeader";

function PostViewer() {
    return (
        <div>
            <PageHeader></PageHeader>
            <div>Post</div>
        </div>
    );
}

function InteractionButton(props) {
    return (
        <button className="bordered-elem" id={props.id} onClick={props.onClick}>
            <img src={props.src}></img>
        </button>
    )
}

export default PostViewer;