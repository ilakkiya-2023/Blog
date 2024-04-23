import React from 'react';
import './styles.css';

function Menu() {
    return (
        <div className="menu-bar" id="menuBar">
            <div className="menu-content">
                {/* Add menu items here */}
                <button>Menu Item 1</button>
                <button>Menu Item 2</button>
                <button>Menu Item 3</button>
            </div>
        </div>
    );
}

export default Menu;
