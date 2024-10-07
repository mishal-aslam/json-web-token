
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  const [data, setData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("tokenKey"));

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3001/login", data)
      .then(x => {
        localStorage.setItem("tokenKey", x.data.token);
        setIsLoggedIn(true);
      })
      .catch(err => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("tokenKey");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login handleInput={handleInput} handleSubmit={handleSubmit} />} />
        <Route path="/contact" element={isLoggedIn ? <Contact handleLogout={handleLogout} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}




export default App;