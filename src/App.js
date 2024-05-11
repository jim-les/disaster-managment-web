import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Homepage from './pages/Homepage/Homepage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Homepage />} />
            </Routes>
        </Router>
    )
}
