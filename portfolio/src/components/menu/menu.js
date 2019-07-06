import React from 'react';
import './menu.scss';


const Menu = () => {
    return ( 
        <nav>
            <div className="burger"></div>
            <ul>
                <a href="#">
                <li>
                    Home
                </li>
                </a>
                <a href="#">
                <li>
                    About
                </li>
                </a>
                <a href="#">
                <li>
                    Stack
                </li>
                </a>
                <a href="#">
                <li>
                    Portfolio
                </li>
                </a>
                <a href="#">
                <li>
                    Contact
                </li>
                </a>
            </ul>
        </nav>
     );
}
 
export default Menu;
