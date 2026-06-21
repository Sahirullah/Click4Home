import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import './Pages.css';
import './Home.css';

// Import gallery images
import img1 from '../assets/Gallery/pexels-aksinfo7-30816312.jpg';
import img2 from '../assets/Gallery/pexels-ansar-muhammad-380085065-23916867.jpg';
import img3 from '../assets/Gallery/pexels-ansar-muhammad-380085065-23916868.jpg';
import img4 from '../assets/Gallery/pexels-artbovich-7005712.jpg';
import img5 from '../assets/Gallery/pexels-ben-khatry-430197437-27665381.jpg';
import img6 from '../assets/Gallery/pexels-binyaminmellish-106399.jpg';
import img7 from '../assets/Gallery/pexels-binyaminmellish-186077.jpg';
import img8 from '../assets/Gallery/pexels-dar-ius-1051256061-29350636.jpg';

const galleryPreview = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Home() {
  const services = [
    {
      title: 'Get Plot in Society',
      description: 'Find your perfect plot in premium societies with modern amenities.',
      icon: '🏗️'
    },
    {
      title: 'Get Home in All Pakistan',
      description: 'Browse homes available across all major cities in Pakistan.',
      icon: '🏠'
    },
    {
      title: 'Get Home on Rent',
      description: 'Discover rental homes that fit your budget and lifestyle.',
      icon: '🔑'
    },
    {
      title: 'Get Flat on Rent',
      description: 'Find comfortable and affordable flats for rent in your area.',
      icon: '🏢'
    }
  ];

  return (
    <div className="page">
      <HeroSection />
      
      <section className="services-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="card-btn">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-preview-section">
        <div className="gallery-preview-container">
          <h2>Featured Properties</h2>
          <div className="gallery-preview-grid">
            {galleryPreview.map((img, index) => (
              <div key={index} className="gallery-preview-item">
                <img src={img} alt={`Property ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="see-more-btn-container">
            <Link to="/gallery" className="see-more-btn">See More Properties</Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <HowItWorks />

      <FAQ />
    </div>
  );
}
