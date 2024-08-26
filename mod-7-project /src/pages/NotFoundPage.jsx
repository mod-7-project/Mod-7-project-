
import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <main className="not-found-container">
      <h1>Page Not Found</h1>
      <img 
        src="/src/images/NotFound.jpg" 
        alt="Detective Pikachu" 
        className="not-found-image" 
      />
      <Link to="/" className="back-home-button">
        <button>Get Back Home</button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
