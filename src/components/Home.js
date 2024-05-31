import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link> | 
    </div>
  );
}

export default Home;

