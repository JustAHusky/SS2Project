import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import GrammarChecker from './pages/GrammarChecker';
import PlagiarismChecker from './pages/PlagiarismChecker';
import TextCompletion from './pages/TextCompletion';
import Paraphraser from './pages/Paraphraser';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function updateUser(newUser) {
    setUser(newUser);
    console.log(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  function handleCallbackResponse(response) {
    if (response) {
      console.log("Logged in successfully!");
      console.log("Encoded JWT ID token: " + response.credential);
      const decodedToken = jwtDecode(response.credential);
      console.log(decodedToken);
  
      const { name, email } = decodedToken;
      console.log("User name:", name);
      console.log("User email:", email);
  
      const userObject = { name, email };
      updateUser(userObject);
      
      saveUserToDatabase(userObject);
  
      navigate("/homepage");
    }
  }
  
   async function handleSignout() {
    // await axios.delete('http://localhost:3080/api/delete', {body: localStorage.getItem('user').name}, {method: 'DELETE'});
    localStorage.removeItem('user'); 
    setUser(''); 
    navigate("/");
  }
  

  async function saveUserToDatabase(userObject) {
    try {
      await axios.post('http://localhost:3080/api/user', userObject);
      console.log('User information saved to the database.');
    } catch (error) {
      console.error('Error saving user information to the database:', error);
    }
  }  

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "249943764427-g7s2qfnr5tdkt8671j4inmg1kvt2b9c1.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    if (!user) {
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    }

    google.accounts.id.prompt();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="App">
      {!user ? (
        <>
          <h1>Log in</h1>
          <p>to continue using WorthSmith</p>
          {user}
          <div id="signInDiv" className="google-signin"></div>
        </>
      ) : (
        <>
          <h1>Welcome, {user.name} ({user.email})</h1>
          <p>Press the button below if you want to signout. See you next time!</p>
          <button onClick={handleSignout} className="signout-button">Sign Out</button>
        </>
      )}
    </div>
  );
}

function AppWrapper() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/grammar-checker" element={<GrammarChecker user={user} />} />
        <Route path="/plagiarism-checker" element={<PlagiarismChecker user={user} />} />
        <Route path="/text-completion" element={<TextCompletion user={user} />} />
        <Route path="/paraphraser" element={<Paraphraser user={user} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
