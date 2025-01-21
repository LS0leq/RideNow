import React from 'react';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <h2>Nasze usługi</h2>
                <div className="service-item">
                    <h3>Połączenia autobusowe</h3>
                    <p>Nasza aplikacja oferuje pełną bazę połączeń autobusowych w Twojej okolicy. Dzięki naszemu narzędziu łatwo znajdziesz najdogodniejsze trasy i godziny odjazdów.</p>
                </div>
                <div className="service-item">
                    <h3>Monitorowanie czasu przyjazdu</h3>
                    <p>Śledź czas przyjazdu autobusów w czasie rzeczywistym. Nasza aplikacja oferuje dokładne informacje na temat opóźnień i przewidywanego czasu przyjazdu każdego pojazdu.</p>
                </div>
                <div className="service-item">
                    <h3>Planowanie podróży</h3>
                    <p>Skorzystaj z opcji planowania podróży, aby zobaczyć najdogodniejsze połączenia między wybranymi punktami. Możesz także ustawić powiadomienia o nadchodzących autobusach.</p>
                </div>
                <div className="service-item">
                    <h3>Wygodne płatności</h3>
                    <p>Dokonuj płatności za bilety bezpośrednio przez aplikację, wybierając preferowaną metodę płatności. Zapewniamy szybki i bezpieczny proces transakcyjny.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
