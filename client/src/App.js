import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import LandingPage from "./components/views/LandingPage/LandingPage"
import LogingPage from "./components/views/LoginPage/LoginPage"
import RegisterPage from "./components/views/RegisterPage/RegisterPage"

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/> } />
          <Route exact path="/login" element={<LogingPage/> } />
          <Route exact path="/register" element={<RegisterPage/>} />
        </Routes>

    </Router>
  );
}

export default App;
