import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../img/logo.png';




const Header = () => {
    return (
        <header>
            <div className="logoImg"><Link to="/"><img src={logoImg}/></Link></div>

            <nav>
                <ul>
                    <li><Link to="/">Wypożycz</Link></li>
                    <li><Link to="/map">Lokalizacje</Link></li>
                    <li><Link to="/help">Pomoc</Link></li>
                    <li className="login"><Link to="/login">Zaloguj się</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
