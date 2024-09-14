import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useUser } from '../components/UserContext';
import { PitaLogo, UnivercityLogo } from '../assets/Logo/Logo';

const Navbar: React.FC = () => {

    const { user } = useUser();
  return (
    <nav className="navbar">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>
            <PitaLogo />
            <UnivercityLogo />
            {/* <h2 style={{ textAlign: 'left', fontSize: '10px' }}>පීඨශිෂ්‍ය සංගමය <nav></nav>  මානවශාස්ත්‍ර හා සමාජීය විද්‍යාපීඨය <nav></nav> ශ්‍රී ජයවර්දනපුර විශ්වවිද්‍යාලය</h2> */}
            <h2 style={{ textAlign: 'left', fontSize: '8px',padding: '1px' }}>Student Assosiation <nav></nav>Faculty of Hiumanities And Social Sciences <nav></nav>University Of Sri Jayawardanapura</h2>
        </div>
        <h1 className="logo"> Pita News</h1>
      
      
      <ul className="link">
        <li className="nav-link"><Link to="/home">Home</Link></li>
        <li className="nav-link"><Link to="/about">About</Link></li>
        <li className="nav-link"><Link to="/services">Services</Link></li>
        <li className="nav-link"><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="profile">
        <Link to="/profile">{user?.username}</Link>
        <img src="https://i.pravatar.cc/50" alt="profile" />
        
      </div>
    </nav>
  );
};

export default Navbar;
