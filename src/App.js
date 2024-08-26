// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const form1Fields = [
    { label: 'Name', type: 'text', placeholder: 'Enter your name', name: 'name' },
    { label: 'Email', type: 'email', placeholder: 'Enter your email', name: 'email' },
    { label: 'Password', type: 'password', placeholder: 'Enter your password', name: 'password' },
  ];

  const form2Fields = [
    { label: 'First Name', type: 'text', placeholder: 'Enter your first name', name: 'firstName' },
    { label: 'Last Name', type: 'text', placeholder: 'Enter your last name', name: 'lastName' },
    { label: 'Email', type: 'email', placeholder: 'Enter your email', name: 'email' },
    { label: 'Password', type: 'password', placeholder: 'Enter your password', name: 'password' },
    { label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', name: 'phoneNumber' },
  ];

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <Router>
      <div className="container mt-5">
        <nav>
          <ul>
            <li>
              <Link to="/form1">Form 1</Link>
            </li>
            <li>
              <Link to="/form2">Form 2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/form1" element={<FormComponent fields={form1Fields} onSubmit={handleFormSubmit} />} />
          <Route path="/form2" element={<FormComponent fields={form2Fields} onSubmit={handleFormSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
