// src/components/Form/PreferencesForm.js
import React, { useState } from 'react';

const PreferencesForm = ({ onSubmit }) => {
    const [vehicleType, setVehicleType] = useState('');
    const [distance, setDistance] = useState('');
    const [ecoPreference, setEcoPreference] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ vehicleType, distance, ecoPreference });
    };

    return (
        <div className="form-container">
            <h2>Wybierz preferencje pojazdu</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Typ pojazdu:
                    <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                        <option value="bus">Autobus</option>
                        <option value="van">Bus</option>
                    </select>
                </label>
                <br />
                <label>
                    Odległość (km):
                    <input
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Preferencje ekologiczne:
                    <input
                        type="checkbox"
                        checked={ecoPreference}
                        onChange={(e) => setEcoPreference(e.target.checked)}
                    />
                </label>
                <br />
                <button type="submit">Zatwierdź</button>
            </form>
        </div>
    );
};

export default PreferencesForm;

