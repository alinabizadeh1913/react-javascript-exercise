import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './css/style.css';
import Home from './Pages/Home';
import Post from './Pages/Post';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='post/:slug?' element={<Post />}/>
            </Routes>
        </Router>
    )
}

export default App;