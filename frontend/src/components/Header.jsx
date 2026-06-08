import "./components_css/Header.css";

/**
 * Header — top navigation bar.
 * Professional style with subtle borders and clean spacing.
 *
 * @param {string} pageTitle - current page name shown on the left
 */
function Header({ pageTitle }) {
  return (
    <header className="header">

      {/* Left — Page Title */}
      <h1 className="header__title">{pageTitle}</h1>

      {/* Right — Actions */}
      <div className="header__right">

        {/* Notification Icon */}
        <button className="header__icon-btn" aria-label="Notifications">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="header__notif-dot"></span>
        </button>

        {/* Settings Icon */}
        <button className="header__icon-btn" aria-label="Settings">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>

        {/* Divider */}
        <div className="header__divider"></div>

        {/* Team Avatars */}
        <div className="header__avatars">
          <div className="header__avatar header__avatar--1">A</div>
          <div className="header__avatar header__avatar--2">B</div>
          <div className="header__avatar header__avatar--3">C</div>
        </div>

        {/* New Access Button */}
        <button className="header__new-access-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          New Access
        </button>

        {/* Divider */}
        <div className="header__divider"></div>

        {/* Profile */}
        <div className="header__profile">
          <div className="header__profile-avatar">U</div>
          <svg className="header__profile-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

      </div>
    </header>
  );
}

export default Header;