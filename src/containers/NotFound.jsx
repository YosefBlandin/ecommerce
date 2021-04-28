import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/notFound.scss';

const NotFound = () => (
  <section className="notFound">
    <h2>404 </h2>
    <p>Pagina no encontrada...</p>
    <Link to="/home">Volver</Link>
  </section>
);

export default NotFound;
