import { useNavigate } from 'react-router-dom';
function CreateNewPost() {
    const navigate = useNavigate();

    const handlePublish = () => {
        // Logic for publishing the blog
        navigate('/publish_success');
    };

    return (
        <div className="container">
            <div className="menu-bar">
                {/* Fixed menu bar */}
                <button>Menu Item 1</button>
                <button>Menu Item 2</button>
                <button>Menu Item 3</button>
            </div>
            <div className="editor">
                <div className="toolbar">
                    {/* Add formatting options */}
                    <button>Format</button>
                    <button>Font Color</button>
                    <button>Bold</button>
                    <button>Italic</button>
                    <button>Underline</button>
                    <button>Justify</button>
                </div>
                <textarea 
                    className="content" 
                    placeholder="Start typing your blog content..." 
                />
                <button className="publish-btn" onClick={handlePublish}>Publish</button>
            </div>
        </div>
    );
}
export default CreateNewPost;
