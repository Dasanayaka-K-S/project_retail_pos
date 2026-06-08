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