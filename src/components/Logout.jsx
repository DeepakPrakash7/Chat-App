import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Clear user credentials from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // Redirect to the login page or any other desired page
    window.location.href = "/login"; // replace with your login page URL
  };

  return (
    <button onClick={handleLogout} className="button">
      <span>Logout</span>
    </button>
  );
};

export default Logout;
