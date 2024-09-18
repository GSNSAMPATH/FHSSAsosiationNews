import React from 'react';


const UpdatesSection: React.FC = () => {
  return (
    <div className="section">
      <h2>Latest Updates</h2>
      <div className="content">
        <div className="large">
          <img
            alt="Large updates image"
            height="400"
            src="https://example.com/large-updates-image.jpg"
            width="600"
          />
        </div>
        <div className="small">
          <img
            alt="Small updates image 1"
            height="200"
            src="https://example.com/small-updates-image.jpg"
            width="200"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatesSection;