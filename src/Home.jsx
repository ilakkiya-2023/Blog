import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function HomePage() {
    const [blogName, setBlogName] = useState('');
    const history = useHistory();

    const handleCreateBlog = () => {
        // Logic for creating a new blog
        history.push('/create_new_post');
    };

    return (
        <div className="container">
            <div className="popup">
                <input 
                    type="text" 
                    placeholder="Enter blog name" 
                    value={blogName} 
                    onChange={(e) => setBlogName(e.target.value)} 
                />
                <button onClick={handleCreateBlog}>Create</button>
            </div>
        </div>
    );
}

export default HomePage;
