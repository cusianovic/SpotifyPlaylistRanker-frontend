import {useState} from 'react';
import PageTitle from "../PageTitle";

function PostPopup() {

    const [status, toggleStatus] = useState(false);

    // TODO
    function updateStatus(e) {
    }

    return (
        <div className="post-popup">
            <PageTitle text="UPLOAD PLAYLIST"></PageTitle>
            <form onSubmit={handleSubmission}>
                <input className="bordered-elem" id="url" type="text" onChange={updateStatus}></input>
                <textarea className="bordered-elem" id="description"></textarea>
                <input type="submit" className="bordered-elem" id="submit-button" value="SUBMIT"></input>
            </form>
        </div>
    );

}

// TODO

function handleSubmission() {

}


export default PostPopup;