import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import GrammarChecker from './pages/GrammarChecker';
import PlagiarismChecker from './pages/PlagiarismChecker';
import TextCompletion from './pages/TextCompletion';
import Paraphraser from './pages/Paraphraser';
import DashBoard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/grammar-checker" element={<GrammarChecker />} />
        <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
        <Route path="/text-completion" element={<TextCompletion />} />
        <Route path="/paraphraser" element={<Paraphraser />} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </Router>
  );
}

export default App;
