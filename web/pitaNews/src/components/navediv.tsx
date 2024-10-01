import { PitaLogo, UnivercityLogo } from "../assets/Logo/Logo";
import "../routs/Navbar.css"

export const Navediv = () => {
  return (
    <div className="navbar2-div">
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
    </div>
  );
};
