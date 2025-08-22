import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-3d">3D ART</span>
            <span className="title-trend">TREND</span>
          </h1>
          <div className="workshop-info">
            <h2>WORKSHOP STARTS AT</h2>
            <h2>5 PM EVERYDAY</h2>
            <h3 className="free-text">FREE FOR STUDENTS</h3>
          </div>
          <p className="description">
            This class will help students understand
            how powerful 3D is and how to take
            advantage of different techniques to
            translate 2D skills into full 3D scenes.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">💬</a>
          </div>
          <div className="website">www.lalengua.com</div>
        </div>
        <div className="hero-image">
          <img
            src="/Image/Chicasentada.jpg"
            alt="Chica sentada"
            className="character-img"
          />
        </div>
      </section>
    </div>
  );
}
