import React from 'react';
import { Link } from 'react-router-dom';

function ContactUsHeader() {
  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://horizons-cdn.hostinger.com/7a432855-cd07-4bff-aa05-d1970751b6de/a27dc909893ded6711ddc4a601441ec9.png"
              alt="TransMedex Logo"
              className="h-12 w-auto object-contain"
              width="192"
              height="48"
              decoding="async"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default ContactUsHeader;

