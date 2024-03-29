import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import SignUpForm from './Components/SignUpForm';
import Tournaments from './Components/Tournaments';
import Explore from './Components/Explore';
import CreateEvent from './Components/CreateEvent';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUpForm />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/CreateEvent" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;

