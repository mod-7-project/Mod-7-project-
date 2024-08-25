
import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <img 
        // src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55e9f737-071f-43e4-95a1-e364df4055f1/ddn2h78-4ba36dd8-4f7f-4998-80e7-e131e62c0e64.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1ZTlmNzM3LTA3MWYtNDNlNC05NWExLWUzNjRkZjQwNTVmMVwvZGRuMmg3OC00YmEzNmRkOC00ZjdmLTQ5OTgtODBlNy1lMTMxZTYyYzBlNjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9773UM8pQsMgwtNKV1_wRAr0tjvEBJbKGkq5Ms_NE_k" 
        src="https://i.pinimg.com/originals/40/fc/43/40fc4353893eccb8db06e647f39c778e.gif" 
        alt="Detective Pikachu" 
        className="not-found-image" 
      />
      <Link to="/" className="back-home-button">
        <button>Get Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
