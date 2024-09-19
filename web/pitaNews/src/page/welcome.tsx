import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/SjpLogo.png';  // Existing logo for top-right
import anotherLogo from '../assets/Logo/pitaLogo.png';  // New logo for top-left
import background from '../assets/Logo/faculty.jpg'; 

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Logo in the top-right corner */}
      <img
        src={logo}
        alt="University Logo"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '80px',
          height: '80px',
        }}
      />

      {/* New logo in the top-left corner */}
      <img
        src={anotherLogo}
        alt="Another Logo"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '80px',
          height: '80px',
        }}
      />

      {/* Welcome Text */}
      <div
        style={{
          textAlign: 'center',
          color: '#fff',
          animation: 'fadeIn 2s ease-out',
        }}
      >
        <h1 style={{ fontSize: '6vw', fontWeight: 'bold', margin: '0' }}>Welcome Today!</h1>
        <h2 style={{ fontSize: '3vw', fontWeight: 'lighter', marginTop: '10px' }}>J’pura Pita News</h2>
      </div>

      {/* CSS for fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 8vw;
          }

          h2 {
            font-size: 4vw;
          }

          img {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 10vw;
          }

          h2 {
            font-size: 5vw;
          }

          img {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
