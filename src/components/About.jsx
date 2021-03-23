import React from 'react';
import '../styles/components/About.scss';

const About = () => (
  <section id="about" className="about">
    <h3 className="about__title">Acerca de Nosotros</h3>
    <p className="about__paragraph">
      Somos tienda física ubicada en Caracas
      <br />
      Boulevard de Sabana Grande, Pasaje la Concordia - Local #3
    </p>
    <section className="about__payments">
      <article className="about__paymobile">
        <h6 className="about__subtitle">Pago Mòvil</h6>
        <p className="about__paragraph">
          Banco Banplus <br />
          C.I: 15725522 <br />
          Telèfono: 04241842943
        </p>
      </article>
      <article className="about__paypal">
        <h6 className="about__subtitle">PayPal</h6>
        <figure>
          <img
            className="about__img"
            src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_150x94.png"
          />
          <figcaption>
            <a href="https://www.paypal.me/ilmauro">Pagar con Paypal</a>{' '}
          </figcaption>
        </figure>
      </article>
    </section>
  </section>
);

export default About;
