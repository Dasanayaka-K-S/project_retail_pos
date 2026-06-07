import "./components_css/Sidebar.css";

/**
 * Sidebar — left-hand navigation panel.
 * Matches the dark vertical nav in dashboard.png.
 */
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">⊙</div>
      </div>

      <nav className="sidebar-nav">
        <button className="nav-btn" aria-label="Home">🏠</button>
        <button className="nav-btn nav-btn--active" aria-label="Transactions">👤</button>
        <button className="nav-btn" aria-label="Products">📦</button>
        <button className="nav-btn" aria-label="Reports">💳</button>
        <button className="nav-btn" aria-label="History">🕐</button>
        <button className="nav-btn" aria-label="Users">👤+</button>
        <button className="nav-btn" aria-label="Links">🔗</button>
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-btn nav-btn--logout" aria-label="Logout">↩</button>
      </div>
    </aside>
  );
}

export default Sidebar;
