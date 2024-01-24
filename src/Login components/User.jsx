import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function User({ isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-profile-dropdown">
      <button onClick={toggleDropdown}>
        <FaUser /> User
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <NavLink to="/profile" onClick={toggleDropdown}>
            <h3>User Profile</h3>
          </NavLink>
          <NavLink to="/login" onClick={toggleDropdown}>
          <h3>Log in</h3>
          </NavLink>
          
        </div>
      )}
    </div>
  );
}
