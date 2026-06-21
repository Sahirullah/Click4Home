import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Search Property',
      description: 'Browse through our extensive collection of properties'
    },
    {
      number: '2',
      title: 'Contact Owner/Agent',
      description: 'Get in touch with property owners or agents directly'
    },
    {
      number: '3',
      title: 'Visit Property',
      description: 'Schedule and visit the property at your convenience'
    },
    {
      number: '4',
      title: 'Complete Deal',
      description: 'Finalize the transaction securely'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p className="section-subtitle">Simple steps to find your dream property</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
