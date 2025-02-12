import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AutobusTurystyczny from './img/autotrans.jpg';
import AutobusMiejski from './img/automiej.jpg';

const VehicleCard = ({ vehicle }) => {
    const navigate = useNavigate();
    const location = useLocation();

    if (!vehicle) {
        return <div>Brak pojazdu do wyświetlenia.</div>;
    }

    let details;
    if (vehicle.type === 'bus') {
        details = (
            <div>
                <p>Autobus turystyczny</p>
                <p>Miejsca: 50</p>
                <p>Rodzaj paliwa: Diesel</p>
                <img src={AutobusMiejski} className="autobus" alt="Autobus Miejski" />
            </div>
        );
    } else if (vehicle.type === 'van') {
        details = (
            <div>
                <p>Bus przewozowy</p>
                <p>Miejsca: 20</p>
                <p>Rodzaj paliwa: Benzyna</p>
                <img src={AutobusTurystyczny} className="autobus" alt="Autobus Turystyczny" />
            </div>
        );
    }

    const handleRentClick = () => {
        if (location.pathname.startsWith('/logged/')) {
            alert('Wypożyczono! Dalsze informaje zostały przesłane w aplikacji mobilnej oraz SMS. Aby zakończyć przejazd anuluj poprzez SMS.');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="vehicle-card">
            <h4>{vehicle.name}</h4>
            <p>{vehicle.type === 'bus' ? 'Autobus' : 'Bus'}</p>
            {details}
            <button onClick={handleRentClick}>Wypożycz</button>
        </div>
    );
};

export default VehicleCard;
