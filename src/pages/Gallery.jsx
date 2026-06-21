import './Pages.css';
import './Gallery.css';

// Import all gallery images
import img1 from '../assets/Gallery/pexels-aksinfo7-30816312.jpg';
import img2 from '../assets/Gallery/pexels-ansar-muhammad-380085065-23916867.jpg';
import img3 from '../assets/Gallery/pexels-ansar-muhammad-380085065-23916868.jpg';
import img4 from '../assets/Gallery/pexels-artbovich-7005712.jpg';
import img5 from '../assets/Gallery/pexels-ben-khatry-430197437-27665381.jpg';
import img6 from '../assets/Gallery/pexels-binyaminmellish-106399.jpg';

const galleryImages = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <div className="page">
      <section className="content">
        <h1>Property Gallery</h1>
        <p>Browse through our stunning collection of properties</p>
        
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Property ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
