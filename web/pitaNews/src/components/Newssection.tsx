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
            <div className="section">
              <h2>Latest News</h2>
              <div className="content">
                <div className="large">
                  <img
                    alt="Large news image"
                    height="400"
                    src="https://example.com/large-news-image.jpg"
                    width="600"
                  />
                </div>
                <div className="small">
                  <img
                    alt="Small news image 1"
                    height="200"
                    src="https://example.com/small-news-image.jpg"
                    width="200"
                  />
                </div>
              </div>
            </div>
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