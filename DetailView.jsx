// Detail View Modal for artwork
const detailStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '40px',
    animation: 'fadeIn 0.3s ease',
  },
  container: {
    display: 'flex',
    gap: '60px',
    maxWidth: '1400px',
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    flex: '1.5',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '80vh',
    objectFit: 'contain',
  },
  info: {
    flex: '1',
    color: 'white',
  },
  title: {
    fontSize: '42px',
    fontWeight: '700',
    margin: '0 0 16px 0',
    letterSpacing: '-0.5px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.7',
    margin: '0 0 32px 0',
    opacity: 0.9,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '32px',
  },
  detail: {
    fontSize: '16px',
    opacity: 0.8,
  },
  label: {
    fontWeight: '600',
    opacity: 1,
    marginRight: '8px',
  },
  closeButton: {
    position: 'absolute',
    top: '40px',
    right: '40px',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '36px',
    cursor: 'pointer',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    transition: 'opacity 0.2s',
  },
  contactButton: {
    background: 'white',
    color: '#1a1a1a',
    border: 'none',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'transform 0.2s',
  },
};

const DetailView = ({ work, onClose, translations }) => {
  return (
    <div style={detailStyles.overlay} onClick={onClose}>
      <div style={detailStyles.container} onClick={(e) => e.stopPropagation()}>
        <button
          style={detailStyles.closeButton}
          onClick={onClose}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
        >
          ✕
        </button>
        
        <div style={detailStyles.imageContainer}>
          <img src={work.image} alt={work.title} style={detailStyles.image} />
        </div>
        
        <div style={detailStyles.info}>
          <h2 style={detailStyles.title}>{work.title}</h2>
          <p style={detailStyles.description}>{work.description}</p>
          
          <div style={detailStyles.details}>
            <div style={detailStyles.detail}>
              <span style={detailStyles.label}>{translations.materials}:</span>
              {work.materials}
            </div>
            <div style={detailStyles.detail}>
              <span style={detailStyles.label}>{translations.dimensions}:</span>
              {work.dimensions}
            </div>
            {work.year && (
              <div style={detailStyles.detail}>
                <span style={detailStyles.label}>{translations.year}:</span>
                {work.year}
              </div>
            )}
          </div>
          
          <button
            style={detailStyles.contactButton}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {translations.inquire}
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

window.DetailView = DetailView;
