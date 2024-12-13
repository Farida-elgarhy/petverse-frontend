import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <MyNavBar />
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/login" element={<div>Login Page</div>} />
                    <Route path="/register" element={<div>Register Page</div>} />
                    <Route path="/about" element={<div>About Us Page</div>} />
                    <Route path="/dashboard" element={<div>Dashboard Page</div>} />
                    <Route path="/shops" element={<div>Shops Page</div>} />
                    <Route path="/vets" element={<div>Vets Page</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;