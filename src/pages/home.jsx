// src/pages/Home.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Hi, {username}!</p>
    </div>
  );
}

export default Home;

