import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-title">
                    <h2>O aplikacji</h2>
                    <p>Nasza aplikacja umożliwia szybkie i łatwe wyszukiwanie najlepszych połączeń autobusowych w Twojej okolicy.</p>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        <p>
                            Wybierając naszą aplikację, masz dostęp do najbardziej aktualnych informacji
                            na temat połączeń autobusowych. Dzięki naszej rozbudowanej bazie danych,
                            znajdziesz najdogodniejsze trasy, które najlepiej pasują do Twoich potrzeb.
                        </p>
                        <p>
                            Bez względu na to, czy szukasz codziennych połączeń do pracy, czy planujesz
                            podróż na weekend, nasza aplikacja pomoże Ci zaplanować trasę i sprawdzić
                            dostępność autobusów w czasie rzeczywistym.
                        </p>
                    </div>
                    <div className="about-features">
                        <h3>Funkcje aplikacji:</h3>
                        <ul>
                            <li>Wyszukiwanie najdogodniejszych połączeń autobusowych</li>
                            <li>Monitorowanie czasu przyjazdu autobusu w czasie rzeczywistym</li>
                            <li>Planowanie podróży na podstawie aktualnych rozkładów jazdy</li>
                            <li>Wybór najwygodniejszych tras w zależności od czasu i lokalizacji</li>
                            <li>Łatwe sprawdzanie dostępnych przystanków i tras w aplikacji</li>
                        </ul>
                    </div>
                </div>
                <div className="about-footer">
                    <p>
                        Aplikacja "RideNOW" została stworzona z myślą o użytkownikach, którzy chcą
                        podróżować szybciej i wygodniej. Śledź nas, aby być na bieżąco z najnowszymi
                        połączeniami!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
