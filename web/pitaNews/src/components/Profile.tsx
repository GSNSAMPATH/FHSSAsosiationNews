// src/components/ProfileModal.tsx
import React from 'react';
import Modal from 'react-modal';
import Profile from './Profile'; // Import the Profile component

interface ProfileModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// Ensure the modal is attached to the document body
Modal.setAppElement('#root');

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Profile Modal"
      style={{
        content: {
          top: '50px',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, 0)',
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
      {/* Modal Header */}
      <div
        style={{
          backgroundColor: '#333',
          padding: '15px',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Profile</h2>
        <button
          onClick={onRequestClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          ✖
        </button>
      </div>

      {/* Modal Content */}
      <div style={{ padding: '20px' }}>
        <Profile isOpen={false} onRequestClose={function (): void {
                  throw new Error('Function not implemented.');
              } } /> {/* Render the profile component */}
      </div>
    </Modal>
  );
};

export default ProfileModal;
