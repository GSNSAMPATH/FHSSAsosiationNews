import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useUser } from '../components/UserContext';
import { PitaLogo, UnivercityLogo } from '../assets/Logo/Logo';

const Navbar: React.FC = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>
        <PitaLogo />
        <UnivercityLogo />
        <h2 style={{ textAlign: 'left', fontSize: '8px', padding: '1px' }}>
          Student Association <br />
          Faculty of Humanities and Social Sciences <br />
          University Of Sri Jayawardanapura
        </h2>
      </div>

      <h1 className="logo">Pita News</h1>

      <ul className={`link ${isOpen ? 'nav-active' : ''}`}>
        <li className="nav-link">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="profile">
        {user ? (
          <>
            <Link to="/profile">{user.username}</Link>
            <img src={user.profilePicture || "https://i.pravatar.cc/50"} alt="profile" />
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      <div className="burger" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
