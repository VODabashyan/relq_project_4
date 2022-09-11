import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppClass from './components/class_components/AppClass';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppClass />} />
                <Route path="/class_components" element={<AppClass />} />
            </Routes>
        </Router>

    );
}

export default App;