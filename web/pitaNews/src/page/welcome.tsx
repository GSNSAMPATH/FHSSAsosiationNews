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
    }, 5550);

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      
      {/* University Logo */}
      <img
        src={logo}
        alt="University Logo"
        style={{
          position: 'absolute',
          top: '3vw',
          right: '2vw',
          width: '8vw',
          height: 'auto',
        }}
      />

      {/* Another Logo */}
      <img
        src={anotherLogo}
        alt="Another Logo"
        style={{
          position: 'absolute',
          top: '3vw',
          left: '2vw',
          width: '8vw',
          height: 'auto',
        }}
      />

      {/* Welcome Text */}
      <div
        style={{
          textAlign: 'center',
          color: '#fff',
          animation: 'fadeIn 2s ease-out',
          marginTop: '15vh', // Push text further down
        }}
      >
        <h1 style={{ fontSize: '7vw', fontWeight: '500', margin: '0' }}>Welcome Today!</h1>
        <h2 style={{ fontSize: '4vw', fontWeight: 'lighter', marginTop: '10px' }}>J’pura Pita News</h2>

        {/* Loading Dots */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>

      {/* CSS for animation and responsiveness */}
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
          width: 1.2vw;
          height: 1.2vw;
          margin: 0 0.5vw;
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
            font-size: 10vw;
          }

          h2 {
            font-size: 6vw;
          }

          .dot {
            width: 2vw;
            height: 2vw;
          }

          img {
            width: 12vw;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 12vw;
          }

          h2 {
            font-size: 8vw;
          }

          .dot {
            width: 3vw;
            height: 3vw;
          }

          img {
            width: 15vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
