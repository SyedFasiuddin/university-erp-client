import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.styled';
import Login from './pages/login';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
