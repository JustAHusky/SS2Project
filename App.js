import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
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
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Logged in successfully!");
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    navigate("/");
  }

  function handleSignout() {
    console.log("Logged out successfully!");
    setUser({});
    navigate("/");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "249943764427-g7s2qfnr5tdkt8671j4inmg1kvt2b9c1.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();
  }, []);

  return (
    <div className="App">
      <h1>Log in</h1>
      <p>to continue using WorthSmith</p>
      <div id="signInDiv" className="google-signin"></div>
      <p>If you are already logged in and want to change account</p>
        <button onClick={handleSignout} className="signout-button">Sign Out</button>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/grammar-checker" element={<GrammarChecker />} />
        <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
        <Route path="/text-completion" element={<TextCompletion />} />
        <Route path="/paraphraser" element={<Paraphraser />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppWrapper;
