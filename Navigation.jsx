// Navigation Component
const navStyles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    zIndex: 100,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '24px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
    textDecoration: 'none',
    color: '#1a1a1a',
  },
  menu: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#1a1a1a',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'opacity 0.2s',
    cursor: 'pointer',
  },
  langSelector: {
    display: 'flex',
    gap: '8px',
    borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
    paddingLeft: '32px',
  },
  langButton: {
    background: 'none',
    border: 'none',
    padding: '4px 8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    opacity: 0.5,
    transition: 'opacity 0.2s',
  },
  langButtonActive: {
    opacity: 1,
    textDecoration: 'underline',
  },
};

const Navigation = ({ currentPage, onNavigate, currentLang, onChangeLang, translations }) => {
  return (
    <nav style={navStyles.nav}>
      <div style={navStyles.container}>
        <a href="#" style={navStyles.logo} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
          ARTE MADFERRO
        </a>
        
        <ul style={navStyles.menu}>
          <li>
            <a
              style={{...navStyles.link, opacity: currentPage === 'gallery' ? 1 : 0.6}}
              onClick={() => onNavigate('gallery')}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = currentPage === 'gallery' ? '1' : '0.6'}
            >
              {translations.gallery}
            </a>
          </li>
          <li>
            <a
              style={{...navStyles.link, opacity: currentPage === 'bio' ? 1 : 0.6}}
              onClick={() => onNavigate('bio')}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = currentPage === 'bio' ? '1' : '0.6'}
            >
              {translations.bio}
            </a>
          </li>
          <li>
            <a
              style={{...navStyles.link, opacity: currentPage === 'contact' ? 1 : 0.6}}
              onClick={() => onNavigate('contact')}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = currentPage === 'contact' ? '1' : '0.6'}
            >
              {translations.contact}
            </a>
          </li>
          
          <div style={navStyles.langSelector}>
            {['pt', 'es', 'en'].map(lang => (
              <button
                key={lang}
                style={{
                  ...navStyles.langButton,
                  ...(currentLang === lang ? navStyles.langButtonActive : {})
                }}
                onClick={() => onChangeLang(lang)}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = currentLang === lang ? '1' : '0.5'}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

window.Navigation = Navigation;
