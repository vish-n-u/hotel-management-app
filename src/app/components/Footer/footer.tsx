import React from 'react'

type Props = {}

// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <p className="text-lg font-bold">Hotelzz</p>
            <p  className='my-3'>123 Road</p>
            <p  className='my-3'>Contact: codewithlari</p>
            <p  className='my-3'>Phone: 000-000-00</p>
          </div>
  
          <nav className="mb-4">
            <ul className="list-none">
              <li className='my-3'><a href="#">Home</a></li>
              <li className='my-3'><a href="#">Our Story</a></li>
              <li className='my-3'><a href="#">Get in Touch</a></li>
              <li className='my-3'><a href="#">Privacy Commitment</a></li>
              <li className='my-3'><a href="#">Terms of Service</a></li>
              <li className='my-3'><a href="#">Customer Assistance</a></li>
              <li className='my-3'><a href="#">Dining Experience</a></li>
              <li className='my-3'><a href="#">Wellness</a></li>
              <li className='my-3'><a href="#">Fitness</a></li>
              <li className='my-3'><a href="#">Sports</a></li>
              <li className='my-3'><a href="#">Events</a></li>
            </ul>
          </nav>
  
          <div className="mb-4">
            <div className="mb-2">
              <h4 className="text-lg font-bold">Our Story</h4>
              <p>[Include a brief story or history about the hotel.]</p>
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-bold">Get in Touch</h4>
              <p>[Provide contact information and perhaps a contact form.]</p>
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-bold">Our Privacy Commitment</h4>
              <p>[Explain the hotel's commitment to privacy and data security.]</p>
            </div>
            {/* Add similar sections for other categories */}
          </div>
        </div>
      </footer>
    );
  };
  
  
  export default Footer;
  

