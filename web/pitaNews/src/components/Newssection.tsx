import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <div className="section">
      <h2>
        News
        <i className="fas fa-chevron-down"></i>
      </h2>
      <div className="carousel">
        <div className="items">    
            <div className="section">
              <h2>Latest News</h2>
              
              <div className ="news-section-container">
                <div className ="news-section-box">Placeholder 1</div>
                <div className ="news-section-box">Placeholder 2</div>
                <div className ="news-section-box">Placeholder 3</div>
                <div className ="news-section-box">Placeholder 4</div>
                </div>
            </div>
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