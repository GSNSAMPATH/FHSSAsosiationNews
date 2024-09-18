import React from 'react';


const PostsSection: React.FC = () => {
  return (
    <div className="section">
      <h2> Posts</h2>
      <div className="content">
        <div className="large">
          <img
            alt="Large posts image"
            height="400"
            src="https://example.com/large-posts-image.jpg"
            width="600"
          />
        </div>
        <div className="small">
          <img
            alt="Small posts image 1"
            height="200"
            src="https://example.com/small-posts-image.jpg"
            width="200"
          />
          </div>
          <div className="small">
          <img
            alt="Post image 1"
            height="200"
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-D1K9MgdWNuyxrc02WSOVGZcp.png"
            width="300"
          />
          </div> 
          <center><div>
            <a className="button" href="#">
                  More Post
            </a>
          </div></center>
      </div>
    </div>
  );
};

export default PostsSection;