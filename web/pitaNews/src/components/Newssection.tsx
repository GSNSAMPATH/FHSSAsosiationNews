import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <div className="section">
      <h2>
        News
        <i className="fas fa-chevron-down"></i>
      </h2>
      <div className="carousel">
        <div className="arrow">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="items">
          <img
            alt="News image 1"
            height="200"
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-D1K9MgdWNuyxrc02WSOVGZcp.png"
            width="300"
          />
        
        </div>
        <div className="arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <a className="button" href="#">
        More News
      </a>
    </div>
  );
};

export default NewsSection;