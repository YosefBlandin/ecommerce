import React, {useState} from 'react';
import MenuSidebar from "./MenuSidebar";

import "../styles/components/menuButton.scss";

const MenuButton = () => {
        const [show, setShow] = useState(false);

        return (
            <>
            <div
             className="menuButton"
              onClick={() => !show ? setShow(true) : setShow(false)}>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
            <MenuSidebar show={show}/>
            </>
        )
}


export default MenuButton;