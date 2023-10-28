import {Routes, Route} from 'react-router-dom'
import React from 'react';
import PageHeader from "./PageHeader";
import './App.css';
import HomePage from "./pages/HomePage";
import LeaderboardViewer from "./pages/LeaderboardViewer";
import PostPopup from "./pages/PostPopup";
import PostViewer from "./pages/PostViewer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/leaderboard" element={<LeaderboardViewer/>}/>
            <Route path="/post" element={<PostPopup/>}/>
            <Route path="/discover" element={<PostViewer/>}/>
        </Routes>
    );
}

export default App;