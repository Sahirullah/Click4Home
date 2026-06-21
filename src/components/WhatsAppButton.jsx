import whatsappImg from '../assets/Whatsapp-btn.avif';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phoneNumber = '+923319179593';
  const message = 'Hello! I am interested in exploring properties.';
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <a 
      href="#"
      className="whatsapp-button"
      onClick={(e) => {
        e.preventDefault();
        handleWhatsAppClick();
      }}
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <img 
        src={whatsappImg} 
        alt="WhatsApp Chat Button"
      />
    </a>
  );
}
