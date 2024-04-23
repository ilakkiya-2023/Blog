import React, { useState } from 'react';
import './styles.css';

function Index() {
    const [blogName, setBlogName] = useState('');
    const [blogContent, setBlogContent] = useState('');

    const handleCreateBlog = () => {
        // Logic for creating a new blog
    };

    return (
        <div className="container">
            <div className="popup">
                <input type="text" placeholder="Enter blog name" value={blogName} onChange={(e) => setBlogName(e.target.value)} />
                <button onClick={handleCreateBlog}>Create</button>
            </div>
            <div className="editor">
                <div className="menu">
                    {/* Add buttons for text formatting here */}
                    <button>Publish</button>
                </div>
                <textarea placeholder="Start typing your blog content..." value={blogContent} onChange={(e) => setBlogContent(e.target.value)}></textarea>
            </div>
        </div>
    );
}

export default Index;
