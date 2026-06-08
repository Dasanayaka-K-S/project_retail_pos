import "./components_css/Sidebar.css";

function Sidebar() {
  const showComingSoon = () => {
    alert(
      "🚧 Feature Under Development!\n\nThis module will be available in a future version of Retail POS."
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">⊙</div>
      </div>

      <nav className="sidebar-nav">
        <button
          className="nav-btn"
          aria-label="Home"
          title="Coming Soon"
          onClick={showComingSoon}
        >
          🏠
        </button>

        <button
          className="nav-btn nav-btn--active"
          aria-label="Transactions"
          title="Current Page"
        >
          👤
        </button>

        <button
          className="nav-btn"
          aria-label="Products"
          title="Coming Soon"
          onClick={showComingSoon}
        >
          📦
        </button>

        <button
          className="nav-btn"
          aria-label="Reports"
          title="Coming Soon"
          onClick={showComingSoon}
        >
          💳
        </button>

        <button
          className="nav-btn"
          aria-label="History"
          title="Coming Soon"
          onClick={showComingSoon}
        >
          🕐
        </button>

        <button
          className="nav-btn"
          aria-label="Users"
          title="Coming Soon"
          onClick={showComingSoon}
        >
          👤+
        </button>

        <button
          className="nav-btn"
          aria-label="Links"
          title="Coming Soon"
          onClick={showComingSoon}
        >
          🔗
        </button>
      </nav>

       

      <div className="sidebar-bottom">
 
         <button
          className="nav-btn" aria-label="Security">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </button>
 
        <button 
          className="nav-btn" aria-label="Help">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </button>

        <button
          className="nav-btn nav-btn--logout"
          aria-label="Logout"
          title="Coming Soon"
          onClick={showComingSoon}
        >
          ↩
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;