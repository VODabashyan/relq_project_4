import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppClass from './components/class_components/AppClass';
import AppHook from './components/hook_components/AppHook';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppHook />} />
                <Route path="/class" element={<AppClass />} /> 
            </Routes>
        </Router>

    );
}

export default App;