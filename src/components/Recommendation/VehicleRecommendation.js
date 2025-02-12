import React from 'react';
import VehicleCard from './VehicleCard';

const VehicleRecommendation = ({ preferences, vehicles }) => {
    const filteredVehicles = vehicles.filter(
        (vehicle) => vehicle.type === preferences.vehicleType
    );

    return (
        <div className="recommendation-container">
            <h2>Rekomendowane pojazdy</h2>
            <div className="vehicle-list">
                {filteredVehicles.length > 0 ? (
                    filteredVehicles.map((vehicle) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))
                ) : (
                    <p>Brak pojazdów pasujących do wybranych preferencji.</p>
                )}
            </div>
        </div>
    );
};

export default VehicleRecommendation;
