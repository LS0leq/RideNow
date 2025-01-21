import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="error-page">
            <div className="error-container">
                <h1 className="error-title">404</h1>
                <p className="error-message">Ups! Strona, którą próbujesz odwiedzić, nie istnieje.</p>
                <p className="error-description">Możliwe, że podałeś błędny adres lub strona została usunięta.</p>
                <Link to="/" className="back-home-btn">Wróć do strony głównej</Link>
            </div>
        </section>
    );
};

export default ErrorPage;
