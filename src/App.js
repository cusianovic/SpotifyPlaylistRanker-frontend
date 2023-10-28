import {Routes, Route} from 'react-router-dom'
import React from 'react';
import Index from './pages/index';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Index/>}/>
    </Routes>
  );
}

export default App;
