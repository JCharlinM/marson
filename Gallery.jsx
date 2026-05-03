// Gallery Component with filtering and detail view
const galleryStyles = {
  container: {
    padding: '80px 40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '32px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  item: {
    cursor: 'pointer',
    position: 'relative',
    aspectRatio: '1',
    overflow: 'hidden',
    borderRadius: '4px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
    padding: '24px 16px 16px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  title: {
    color: 'white',
    fontSize: '18px',
    fontWeight: '500',
    margin: 0,
  },
};

const Gallery = ({ works, onSelectWork, theme }) => {
  return (
    <div style={galleryStyles.container}>
      <div style={galleryStyles.grid}>
        {works.map((work, idx) => (
          <div
            key={idx}
            style={galleryStyles.item}
            onClick={() => onSelectWork(work)}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
              e.currentTarget.querySelector('.overlay').style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              e.currentTarget.querySelector('.overlay').style.opacity = '0';
            }}
          >
            <img src={work.image} alt={work.title} style={galleryStyles.image} />
            <div className="overlay" style={galleryStyles.overlay}>
              <h3 style={galleryStyles.title}>{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.Gallery = Gallery;
