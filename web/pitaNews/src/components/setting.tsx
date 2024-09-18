import { useState } from 'react';
import Modal from 'react-modal';

const SettingsModal: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  setTheme: (theme: string) => void;
  theme: string;
  handleThemeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;


}> = ({ isOpen, onRequestClose }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
    localStorage.setItem('theme', e.target.value);
    document.body.className = e.target.value;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Settings"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '600px',
          padding: '0',
          height: '90%',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: '1000',
        },
      }}
    >
      <div className="settings-modal">
        <h2>Settings</h2>
        <form>
          <label>
            Theme:
            <select value={theme} onChange={handleThemeChange}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <button type="button" onClick={onRequestClose}>
            Close
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SettingsModal;