import { useState, useEffect } from 'react';
import hero1 from '../assets/Hero-Section/1.jpg';
import hero2 from '../assets/Hero-Section/2.jpg';
import hero3 from '../assets/Hero-Section/3.jpg';
import hero4 from '../assets/Hero-Section/4.jpg';
import './HeroSection.css';

const heroImages = [hero1, hero2, hero3, hero4];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoScroll]);

  const handleNext = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    setTimeout(() => setAutoScroll(true), 3000);
  };

  const handlePrev = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setTimeout(() => setAutoScroll(true), 3000);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <button className="arrow-btn left-arrow" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="hero-images-wrapper">
          <img
            src={heroImages[currentIndex]}
            alt={`Hero ${currentIndex + 1}`}
            className="hero-image"
          />
        </div>

        <button className="arrow-btn right-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="hero-dots">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              setAutoScroll(false);
              setTimeout(() => setAutoScroll(true), 3000);
            }}
          />
        ))}
      </div>
    </section>
  );
}
