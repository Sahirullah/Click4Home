import './About.css';

export default function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Transparency',
      description: 'We believe in honest and transparent dealings with all our clients.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships based on trust and integrity.'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Fast and efficient services to make your property journey smooth.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Continuously improving our platform with latest technology.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Khan',
      role: 'CEO & Founder',
      description: '10+ years in real estate industry'
    },
    {
      name: 'Fatima Ali',
      role: 'Head of Operations',
      description: 'Expert in property management'
    },
    {
      name: 'Hassan Raza',
      role: 'Lead Developer',
      description: 'Tech innovator & platform architect'
    },
    {
      name: 'Zara Khan',
      role: 'Customer Relations',
      description: 'Dedicated to client satisfaction'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Click4Home</h1>
          <p>Your trusted partner in finding the perfect property across Pakistan</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-overview">
        <div className="overview-container">
          <div className="overview-content">
            <h2>Who We Are</h2>
            <p>Click4Home is Pakistan's leading online real estate platform dedicated to revolutionizing the way people buy, sell, and rent properties. Since our inception, we've been committed to providing a transparent, user-friendly, and secure marketplace for property transactions.</p>
            <p>With thousands of verified properties and hundreds of trusted agents across Pakistan, we connect buyers, sellers, and renters with ease and confidence.</p>
          </div>
          <div className="overview-stats">
            <div className="stat">
              <h3>10,000+</h3>
              <p>Properties</p>
            </div>
            <div className="stat">
              <h3>5,000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Trusted Agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>To revolutionize the real estate market by providing a transparent, accessible, and technology-driven platform that empowers buyers, sellers, and renters to make informed decisions.</p>
          </div>
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>To become Pakistan's most trusted real estate platform, making property transactions simple, secure, and stress-free for everyone.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="values-container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="team-container">
          <h2>Our Team</h2>
          <p className="team-subtitle">Meet the talented people behind Click4Home</p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="why-choose-container">
          <h2>Why Choose Click4Home?</h2>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-number">01</span>
              <h4>Verified Listings</h4>
              <p>All properties are verified and authenticated by our team</p>
            </div>
            <div className="why-item">
              <span className="why-number">02</span>
              <h4>Expert Agents</h4>
              <p>Connect with experienced and licensed agents</p>
            </div>
            <div className="why-item">
              <span className="why-number">03</span>
              <h4>Secure Platform</h4>
              <p>Your data is protected with advanced security measures</p>
            </div>
            <div className="why-item">
              <span className="why-number">04</span>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer support for your convenience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
