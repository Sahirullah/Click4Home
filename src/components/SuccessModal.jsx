import './SuccessModal.css';

export default function SuccessModal({ isOpen, name, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="success-modal">
        <div className="modal-content">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2>Message Sent Successfully!</h2>
          
          <p className="modal-message">
            Thank you, <strong>{name}</strong>! Your message has been received.
          </p>
          
          <p className="modal-subtitle">
            We appreciate you reaching out. Our team will get back to you as soon as possible.
          </p>
          
          <button className="modal-btn" onClick={onClose}>
            OK, Got it!
          </button>
        </div>
      </div>
    </>
  );
}
