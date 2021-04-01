import React from 'react'

import "../styles/components/menuSidebar.scss";

const MenuSidebar = ({ show }) => {
    return (
            <section
             className={!show ? "menuSidebar" : "menuSidebar menuSidebar--on"}>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Carrito</li>
                <li>Contacto</li>
                <li>Acerca de Machete Store</li>
            </ul>
        </section>
    )
}

export default MenuSidebar