import React from 'react';
import './App.css';

function ContactButtons() {
  return (
    <>
      {/* Email FAB Button */}
      <a href="mailto:arkapratimmondal@gmail.com">
        <button className="fab fab-email">
          <i className="fas fa-envelope"></i>
        </button>
      </a>

      {/* LinkedIn FAB Button */}
      <a
        href="https://www.linkedin.com/in/arkapratim-mondal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="fab fab-linkedin">
          <i className="fab fa-linkedin"></i>
        </button>
      </a>
    </>
  );
}

export default ContactButtons;
