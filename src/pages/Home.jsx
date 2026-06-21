import HeroSection from '../components/HeroSection';
import './Pages.css';

export default function Home() {
  return (
    <div className="page">
      <HeroSection />
      <section className="content">
        <h1>Welcome to Click4Home</h1>
        <p>Discover your dream home with our premium house selling platform. Browse through our extensive collection of properties and find the perfect place for you.</p>
      </section>
    </div>
  );
}
