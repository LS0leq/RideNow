import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>O nas</h4>
                    <p>
                        RideNOW to aplikacja, która pomaga w wyborze najlepszego środka transportu
                        dostosowanego do Twoich potrzeb.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Przydatne linki</h4>
                    <ul>
                        <li><Link to="about">O aplikacji</Link></li>
                        <li><Link to="services">Nasze usługi</Link></li>
                        <li><Link to="help">Kontakt</Link></li>
                        <li><Link to="privacy">Polityka prywatności</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Kontakt</h4>
                    <p>Email: support@ridenow.com</p>
                    <p>Telefon: +48 123 456 789</p>
                </div>
                <div className="footer-section">
                    <h4>Śledź nas</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img src="/img/facebook-icon.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <img src="/img/twitter-icon.png" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src="/img/instagram-icon.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 RideNOW. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
};

export default Footer;
