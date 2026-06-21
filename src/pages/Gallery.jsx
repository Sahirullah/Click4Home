import './Pages.css';
import './Gallery.css';

// Import all gallery images
import img1 from '../assets/Gallery/pexels-aksinfo7-30816312.jpg';
import img2 from '../assets/Gallery/pexels-ansar-muhammad-380085065-23916867.jpg';
import img3 from '../assets/Gallery/pexels-ansar-muhammad-380085065-23916868.jpg';
import img4 from '../assets/Gallery/pexels-artbovich-7005712.jpg';
import img5 from '../assets/Gallery/pexels-ben-khatry-430197437-27665381.jpg';
import img6 from '../assets/Gallery/pexels-binyaminmellish-106399.jpg';
import img7 from '../assets/Gallery/pexels-binyaminmellish-186077.jpg';
import img8 from '../assets/Gallery/pexels-dar-ius-1051256061-29350636.jpg';
import img9 from '../assets/Gallery/pexels-dropshado-31737863.jpg';
import img10 from '../assets/Gallery/pexels-edithubpro-18246428.jpg';
import img11 from '../assets/Gallery/pexels-edithubpro-18273272.jpg';
import img12 from '../assets/Gallery/pexels-edithubpro-18273275.jpg';
import img13 from '../assets/Gallery/pexels-edithubpro-18285874.jpg';
import img14 from '../assets/Gallery/pexels-edithubpro-18285884.jpg';
import img15 from '../assets/Gallery/pexels-edithubpro-18285933.jpg';
import img16 from '../assets/Gallery/pexels-edithubpro-18285946.jpg';
import img17 from '../assets/Gallery/pexels-fotografiagmazg-11258258.jpg';
import img18 from '../assets/Gallery/pexels-huy-quang-nguy-n-18652822-6670661.jpg';
import img19 from '../assets/Gallery/pexels-ibidsy-5524164.jpg';
import img20 from '../assets/Gallery/pexels-kirti-phadke-316475723-17947890.jpg';
import img21 from '../assets/Gallery/pexels-quantumv-1161893652-30050827.jpg';
import img22 from '../assets/Gallery/pexels-ranamatloob567-34377945.jpg';
import img23 from '../assets/Gallery/pexels-ranamatloob567-34457749.jpg';
import img24 from '../assets/Gallery/pexels-s3t-koncepts-1636465088-28853362.jpg';
import img25 from '../assets/Gallery/pexels-souranshi-fashion-and-lifestyle-magazine-2959920-7148779 (1).jpg';
import img26 from '../assets/Gallery/pexels-souranshi-fashion-and-lifestyle-magazine-2959920-7148779.jpg';
import img27 from '../assets/Gallery/pexels-souranshi-fashion-and-lifestyle-magazine-2959920-7148846.jpg';
import img28 from '../assets/Gallery/pexels-souranshi-fashion-and-lifestyle-magazine-2959920-7148849.jpg';
import img29 from '../assets/Gallery/pexels-wolfgang-weiser-467045605-31075124.jpg';
import img30 from '../assets/Gallery/pexels-zynaly-27822509.jpg';
import img31 from '../assets/Gallery/pexels-zynaly-27822512.jpg';

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31
];

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
