import React from 'react';

const UpdatesSection: React.FC = () => {
  return (
    <div className="section">
      <h2>Updates 
        <i className="fas fa-chevron-down"></i>
      </h2>
      
      <h2>Latest Updates</h2>

    <div className ="main-content">
    <div className ="box">Placeholder 1</div>
    <div className ="box">Placeholder 2</div>
    <div className ="box">Placeholder 3</div>
    <div className ="box">Placeholder 4</div>
    </div>

    <footer>
    <span className ="label">News</span>
    <span className ="down-arrow"></span>
  </footer>
      </div>
    
  );
};
export default UpdatesSection;
