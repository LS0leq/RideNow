import React from 'react';
import { Link,useParams } from 'react-router-dom';
import logoImg from '../../img/logo.png';




const HeaderLog = () => {

    const { username } = useParams();
    return (
        <header className="headerLog">
            <div className="logoImg"><Link to="/"><img src={logoImg}/>  </Link> <p>Zalogowano jako <strong>ADMIN</strong></p></div>

            <nav>
                <ul>
                    <li className="login"><Link to="/">Wyloguj się</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderLog;
