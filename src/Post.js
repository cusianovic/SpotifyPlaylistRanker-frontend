import {useState} from 'react';
import PageTitle from "./PageTitle";

function Post() {
    return (
        <div>
            <PageTitle text="UPLOAD PLAYLIST"></PageTitle>
            <div>
                <input className="bordered-elem" id="url" type="text"></input>
            </div>
            <div>
                <textarea className="bordered-elem" id="description"></textarea>
            </div>
            <div>
                <SubmitButton></SubmitButton>
            </div>
        </div>
    );
}

function SubmitButton() {
    return (
        <button className="bordered-elem" id="submit-button" onClick={handleSubmission}>SUBMIT</button>
    );
}

// TODO

function handleSubmission() {

}


export default Post;