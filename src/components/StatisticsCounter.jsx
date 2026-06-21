import { useState, useEffect } from 'react';
import './StatisticsCounter.css';

export default function StatisticsCounter() {
  const [counts, setCounts] = useState({
    properties: 0,
    clients: 0,
    cities: 0,
    agents: 0
  });

  useEffect(() => {
    const targets = {
      properties: 10000,
      clients: 5000,
      cities: 50,
      agents: 200
    };

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        properties: Math.floor(targets.properties * progress),
        clients: Math.floor(targets.clients * progress),
        cities: Math.floor(targets.cities * progress),
        agents: Math.floor(targets.agents * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  const stats = [
    {
      number: `${counts.properties.toLocaleString()}+`,
      label: 'Properties'
    },
    {
      number: `${counts.clients.toLocaleString()}+`,
      label: 'Happy Clients'
    },
    {
      number: `${counts.cities}+`,
      label: 'Cities Covered'
    },
    {
      number: `${counts.agents}+`,
      label: 'Trusted Agents'
    }
  ];

  return (
    <div className="statistics-counter">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
