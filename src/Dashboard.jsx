// Dashboard.jsx

import React from 'react';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>{window.location.pathname === '/' && (
              <Link to="/create-blog">+ Create Blog</Link>
            )}</h2>
      <p>Welcome to your dashboard. Here, you can view your recent blog posts and manage your account.</p>
    </div>
  );
}


export default Dashboard;
