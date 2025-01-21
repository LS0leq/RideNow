import React from 'react';
import AutobusTurystyczny from './img/autotrans.jpg';
import AutobusMiejski from './img/automiej.jpg';


const VehicleCard = ({ vehicle }) => {
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
                <img src={AutobusMiejski} className="autobus"/>
            </div>
        );
    } else if (vehicle.type === 'van') {
        details = (
            <div>
                <p>Bus przewozowy</p>
                <p>Miejsca: 20</p>
                <p>Rodzaj paliwa: Benzyna</p>
                <img src={AutobusTurystyczny} className="autobus"/>

            </div>
        );
    }

    return (
        <div className="vehicle-card">
            <h4>{vehicle.name}</h4>
            <p>{vehicle.type === 'bus' ? 'Autobus' : 'Bus'}</p>
            {details}
            <button>Wypożycz</button>
        </div>
    );
};

export default VehicleCard;
