import "./components_css/Header.css";

function Header({ pageTitle }) {
  const showComingSoon = () => {
    alert(
      "🚧 Feature Under Development!\n\nThis feature will be available in a future version of Retail POS."
    );
  };

  return (
    <header className="header">
      <h1 className="header__title">{pageTitle}</h1>

      <div className="header__right">

        <button
          className="header__icon-btn"
          aria-label="Notifications"
          onClick={showComingSoon}
          title="Coming Soon"
        >
          🔔
          <span className="header__notif-dot"></span>
        </button>

        <button
          className="header__icon-btn"
          aria-label="Settings"
          onClick={showComingSoon}
          title="Coming Soon"
        >
          ⚙️
        </button>

        <div className="header__divider"></div>

        <div
          className="header__avatars"
          onClick={showComingSoon}
          title="Coming Soon"
        >
          <div className="header__avatar header__avatar--1">A</div>
          <div className="header__avatar header__avatar--2">B</div>
          <div className="header__avatar header__avatar--3">C</div>
        </div>

        <button
          className="header__new-access-btn"
          onClick={showComingSoon}
        >
          + New Access
        </button>

        <div className="header__divider"></div>

        <div
          className="header__profile"
          onClick={showComingSoon}
          title="Coming Soon"
        >
          <div className="header__profile-avatar">K</div>
          <span>Kolitha</span>
        </div>

      </div>
    </header>
  );
}

export default Header;