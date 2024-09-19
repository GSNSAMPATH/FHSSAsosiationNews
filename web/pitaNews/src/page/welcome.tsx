import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/SjpLogo.png';  
import anotherLogo from '../assets/Logo/pitaLogo.png';  
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

      <div
        style={{
          textAlign: 'center',
          color: '#fff',
          animation: 'fadeIn 2s ease-out',
        }}
      >
        <h1 style={{ fontSize: '6vw', fontWeight: 'bold', margin: '0' }}>Welcome Today!</h1>
        <h2 style={{ fontSize: '3vw', fontWeight: 'lighter', marginTop: '10px' }}>J’pura Pita News</h2>

        {/* Loading dots animation */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>

      {/* CSS for fade-in animation and dots animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }

        .dot {
          width: 12px;
          height: 12px;
          margin: 0 5px;
          background-color: white;
          border-radius: 50%;
          display: inline-block;
          animation: blink 1.4s infinite both;
        }

        .dot:nth-child(1) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.4s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.6s;
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

          .dot {
            width: 10px;
            height: 10px;
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

          .dot {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
