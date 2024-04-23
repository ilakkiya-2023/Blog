// CreateBlog.jsx

import React from 'react';

function CreateBlog({ history }) {
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <h2>Create Blog</h2>
      <input type="text" placeholder="Title" />
      <textarea placeholder="Write your blog here..."></textarea>
      <button className="publish-btn">Publish</button>
    </div>
  );
}

export default CreateBlog;
