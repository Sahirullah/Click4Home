import { useState, useEffect } from 'react'
import './HeroCarousel.css'

import hero1 from '../assets/Hero-Section/1.jpg'
import hero2 from '../assets/Hero-Section/2.jpg'
import hero3 from '../assets/Hero-Section/3.jpg'
import hero4 from '../assets/Hero-Section/4.jpg'

const heroImages = [hero1, hero2, hero3, hero4]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [autoScroll])

  const goToPrevious = () => {
    setAutoScroll(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setAutoScroll(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  const handleMouseEnter = () => {
    setAutoScroll(false)
  }

  const handleMouseLeave = () => {
    setAutoScroll(true)
  }

  return (
    <section className="hero-carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button className="carousel-arrow left-arrow" onClick={goToPrevious} aria-label="Previous image">
            &#10094;
          </button>

          <div className="carousel-track">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hero ${index + 1}`}
                className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>

          <button className="carousel-arrow right-arrow" onClick={goToNext} aria-label="Next image">
            &#10095;
          </button>
        </div>

        <div className="carousel-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setAutoScroll(false)
                setCurrentIndex(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
