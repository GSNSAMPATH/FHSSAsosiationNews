import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useUser } from '../components/UserContext';
import { PitaLogo, UnivercityLogo } from '../assets/Logo/Logo';
import CustomIcon from '../assets/updated_reload_preset_white.svg';
import ProfileModal from '../components/Profile';
import SettingsModal from '../components/setting';
import { Navediv } from '../components/navediv';

const Navbar: React.FC = () => {
  const { user , signIn, signOut } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileBoxOpen, setIsProfileBoxOpen] = useState(false); // State for profile dropdown
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const date = new Date();
  const dateString = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  }).format(date);

  const handleReload = () => {
    window.location.reload();
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const toggleProfileBox = () => {
    setIsProfileBoxOpen(!isProfileBoxOpen);
  };

  const handleLogout = async () => {
    signOut();
  };

  const handleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeProfileModal = () => {
    setIsProfileOpen(false);
  };

  const hadleSettigsBox = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="navbar-container">
    <nav className="navbar">
      <div className="navebarhed">
        <div style={{ width: '10%' }}>
          <h4 className="date" style={{ whiteSpace: 'nowrap' }}>{dateString}</h4>
        </div>
        <div className="profile">
          {user ? (
            <>
              <div onClick={toggleProfileBox} style={{ cursor: 'pointer', display: 'inline-block', position: 'relative',top: '4px' }}>
                
                <text style={{ marginLeft: '0px', color: 'white',position: 'absolute',right: '40px',top: '2px'  }}>{user.username}</text>
                <img
                  src={user.profilePicture || "https://i.pravatar.cc/50"}
                  alt="profile"
                  style={{ borderRadius: '50%', marginLeft: '8px' }}
                />
              </div>
              {/* Small dropdown box under the profile */}

            </>
          ) : (
            <Link to="/auth">Login</Link>
          )}
        </div>
      </div>

      <div className="navbar2">
        <Navediv />
        {/* <div className="navbar2-div">
        <div style={{ marginTop: '14px' }}>
          <h1 className="logo">WEEK</h1>
          <h1 className="logo">NEWS</h1>
        </div>

        <div
          className="universityLogo2"
        >
          <PitaLogo className='pitalogo' />
          <UnivercityLogo className='pitalogo' />
          <h2 className="univercity">
            Student Association <br />
            Faculty of Humanities and Social Sciences <br />
            University Of Sri Jayawardanapura
          </h2>
          </div>
        </div> */}
      </div>

      <div className="burger" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="header3">
        <ul className={`link ${isOpen ? 'nav-active' : ''}`} >
          <li className={location.pathname === '/home' ? 'active' : ''}>
            <Link to="/home">Home</Link>
          </li>
          <li className={location.pathname === '/child1' ? 'active' : ''}>
            <Link to="/child1">Special Notice</Link>
          </li>
          <li className={location.pathname === '/kuppi' ? 'active' : ''}>
            <Link to="/kuppi">Kuppi</Link>
          </li>
          <li className={location.pathname === '/contacus' ? 'active' : ''}>
            <Link to="/contacus">Contact Us</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <img
          src={CustomIcon}
          alt="Custom Icon"
          width="23"
          height="23"
          onClick={handleReload}
          className='reloadIcon'
        />
        
      </div>
      {isProfileBoxOpen && (
        <div className="profile-dropdown">
          {user?.role === 'Admin' ? (
            <Link to="/Admin" onClick={toggleProfileBox}>Admin</Link>
          ) : (
            <Link to="#" onClick={() => {handleProfile();  toggleProfileBox()}}>Profile</Link>
          )}
          <Link to="#" onClick={() => { hadleSettigsBox(); toggleProfileBox}}>Settings</Link>
          <Link to="#" onClick={() => { handleLogout(); toggleProfileBox(); }}>Logout</Link>
        </div>
      )}

    <ProfileModal isOpen={isProfileOpen} onRequestClose={closeProfileModal} />
    <SettingsModal isOpen={isSettingsOpen} onRequestClose={hadleSettigsBox} setTheme={function (theme: string): void {
        throw new Error('Function not implemented.');
      } } theme={''} handleThemeChange={function (e: React.ChangeEvent<HTMLSelectElement>): void {
        throw new Error('Function not implemented.');
      } } />
    </nav>
    </div>
  );
};

export default Navbar;
