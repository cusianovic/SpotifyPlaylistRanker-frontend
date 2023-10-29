import PageHeader from "../PageHeader";
import PageTitle from "../PageTitle";
import {useState, useEffect} from "react";

function LeaderboardViewer() {


    const [leaderboard, setLeaderboard] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect( () => {
        async function retrieveLeaderboard() {

            let response = await fetch(`http://localhost:3001/api/retrieveList`, {
                method: 'POST',
                headers: {'Content-Type':'application/json'}
            }).then((e) => {
                return e.json();
            });
            setLeaderboard(response);
            setLoading(false);
        }
        retrieveLeaderboard()
    }, []);


    if(isLoading) return(<div>loading...</div>)
    return (
        <div>
            <PageHeader></PageHeader>
            <PageTitle text="LEADERBOARD"></PageTitle>
            <Leaderboard data={leaderboard}></Leaderboard>
        </div>
    );
}

function Leaderboard(props) {


    console.log(props.data);

    return (
        <table className="leaderboard">
            <thead>
            <tr>
                <td>Playlist Name</td>
                <td>Total Upvotes</td>
                <td>Total Downvotes</td>
                <td>Playlist ID</td>
            </tr>
            </thead>

            {props.data.map(
                (item) => {
                    console.log(item)
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.upvotes}</td>
                            <td>{item.downvotes}</td>
                            <td>{item.playlistid}</td>
                        </tr>
                    )
                }
            )}

        </table>
    )
}

export default LeaderboardViewer;