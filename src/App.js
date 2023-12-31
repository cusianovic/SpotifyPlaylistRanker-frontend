import {Routes, Route} from 'react-router-dom'
import React from 'react';
import PageHeader from "./PageHeader";
import Login from "./pages/index"
import './App.css';
import HomePage from "./pages/HomePage";
import LeaderboardViewer from "./pages/LeaderboardViewer";
import PostPopup from "./pages/PostPopup";
import PostViewer from "./pages/PostViewer";
import Auth from "./util/auth"
import LoginPage from "./pages/LoginPage"
function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/leaderboard" element={<LeaderboardViewer/>}/>
            <Route path="/post" element={<Auth component={<PostPopup/>}/>}/>
            <Route path="/discover" element={<Auth component={<PostViewer/>}/>}/>
            <Route path = "/base" element={<LoginPage></LoginPage>}/>
        </Routes>
    );
}

export default App;

