import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Verified Properties',
      description: 'All properties are verified and authenticated',
      icon: '✓'
    },
    {
      title: 'Trusted Agents',
      description: 'Professional and licensed agents to guide you',
      icon: '✓'
    },
    {
      title: 'All Pakistan Coverage',
      description: 'Browse properties across all major cities',
      icon: '✓'
    },
    {
      title: 'Secure Transactions',
      description: 'Safe and secure payment methods',
      icon: '✓'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p className="section-subtitle">We provide the best real estate services in Pakistan</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="card-header">
                <div className="icon-circle">{feature.icon}</div>
              </div>
              <div className="card-body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
