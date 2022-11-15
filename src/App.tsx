import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LecturersPage from "./pages/lecturers"
import StudentPage from "./pages/students"
import Login from "./pages/login"

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/students" element={<StudentPage />} />
                    <Route path="/lecturers" element={<LecturersPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
