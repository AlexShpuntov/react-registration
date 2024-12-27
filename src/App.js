import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';
import CollaborationPage from './pages/CollaborationPage';

function App() {
    return (
        <Router>
          <nav>
            <ul>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/collaboration">Collaboration</Link></li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/signup" element={<RegistrationPage />} />
            <Route path="/collaboration" element={<CollaborationPage />} />
          </Routes>
        </Router>
    );
}

export default App;
