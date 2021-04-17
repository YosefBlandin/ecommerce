import React from 'react';

import '../styles/components/footer.scss';

const Footer = () => (
  <>
    <footer className="footer">
      <p>
        Copyright<strong> Machete Store</strong>
      </p>
      <ul>
        <a href="https://twitter.com/machetestoreccs?lang=en">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/machetestore.clothing/">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/machetestore/?hl=en">
          <i className="fab fa-instagram"></i>
        </a>
      </ul>
    </footer>
  </>
);

export default Footer;
