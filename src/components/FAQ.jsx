import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I search for properties?',
      answer: 'You can search for properties using our search bar. Filter by location, price, property type, and other criteria to find your perfect match.'
    },
    {
      question: 'Are all properties verified?',
      answer: 'Yes, all properties listed on Click4Home are verified by our team to ensure authenticity and accuracy of information.'
    },
    {
      question: 'How do I contact an agent?',
      answer: 'You can contact any agent directly through the property listing. Click the contact button to send a message or call them directly.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our platform is free for buyers and renters. Sellers and agents may have different pricing packages. Contact us for more details.'
    },
    {
      question: 'Can I schedule a property visit?',
      answer: 'Yes, you can schedule a property visit by contacting the agent or owner directly through the property listing page.'
    },
    {
      question: 'Is it safe to use Click4Home?',
      answer: 'Absolutely. We use secure payment methods and verify all agents and properties to ensure a safe experience for all users.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about Click4Home</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="toggle-icon">+</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
