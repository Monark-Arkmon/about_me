import { useState } from 'react';
import { Mail, Linkedin, X } from 'lucide-react';
import './ContactButton.css';

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contact-wrapper">
      <div className={`contact-menu ${isOpen ? 'open' : ''}`}>
        <button 
          className="contact-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        >
          {isOpen ? (
            <X className="contact-icon" size={24} />
          ) : (
            <span>Contact</span>
          )}
        </button>
        
        <div className="contact-items">
          <a
            href="mailto:arkapratimmondal@gmail.com"
            className="contact-item"
            style={{ '--delay': '0.1s' }}
          >
            <Mail className="contact-icon" size={20} />
            <span className="contact-label">Email</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/arkapratim-mondal"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            style={{ '--delay': '0.2s' }}
          >
            <Linkedin className="contact-icon" size={20} />
            <span className="contact-label">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactButton;