import React from 'react'

import "../styles/components/Footer.scss";

const Footer = () => (
    <>

        <svg className="footer--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#000" fillOpacity="1" d="M0,224L120,213.3C240,203,480,181,720,181.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <footer className="footer">

            <p>Machete Store <strong>All Rights Reserved</strong></p>
            <ul>
                <a href="https://twitter.com/machetestoreccs?lang=en"><i className="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/machetestore.clothing/"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/machetestore/?hl=en"><i className="fab fa-instagram"></i></a>
            </ul>
        </footer>
    </>
)


export default Footer
