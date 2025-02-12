import React, { useState, useEffect } from 'react';
import '../Static/Admin.css';

const Admin = () => {
    const [vehicles, setVehicles] = useState([]);
    const [earnings, setEarnings] = useState([5000, 6000, 7000, 5500, 4500]);
    const [rentals, setRentals] = useState(120);
    const [newVehicleType, setNewVehicleType] = useState('');
    const [newFuelType, setNewFuelType] = useState('');
    const [newSeats, setNewSeats] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [complaints, setComplaints] = useState([
        { id: 1, comment: "Pojazd był brudny", user: "jan@example.com" },
        { id: 2, comment: "Problemy z silnikiem", user: "anna@example.com" }
    ]);

    const handleAddVehicle = () => {
        const newVehicle = {
            type: newVehicleType,
            fuelType: newFuelType,
            seats: newSeats,
            description: newDescription,
        };
        setVehicles([...vehicles, newVehicle]);
        alert("Przesłano do firm pośredniczących");
        setNewVehicleType('');
        setNewFuelType('');
        setNewSeats('');
        setNewDescription('');
    };

    const handleGenerateReport = () => {
        alert("Na maila wysłano raport");
    };

    return (
        <section>
            <div className="admin-panel">
                <h2>Panel Administratora</h2>

                <div className="add-vehicle">
                    <h3>Dodaj Pojazd</h3>
                    <input
                        type="text"
                        placeholder="Typ pojazdu"
                        value={newVehicleType}
                        onChange={(e) => setNewVehicleType(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Rodzaj paliwa"
                        value={newFuelType}
                        onChange={(e) => setNewFuelType(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Ilość miejsc"
                        value={newSeats}
                        onChange={(e) => setNewSeats(e.target.value)}
                    />
                    <textarea
                        placeholder="Opis pojazdu"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleAddVehicle}>Dodaj Pojazd</button>
                </div>
            </div>
            <div className="admin-panel">
                <div className="statistics">
                    <h3>Statystyki</h3>

                    <div className="earnings">
                        <h4>Zarobki miesięczne</h4>
                        <ul>
                            {earnings.map((earningsValue, index) => (
                                <li key={index}>
                                    Miesiąc {index + 1}: {earningsValue} PLN
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rentals">
                        <h4>Liczba wynajmów</h4>
                        <p>{rentals} wynajmów</p>
                    </div>

                    <button onClick={handleGenerateReport}>Generuj Raport</button>
                </div>
            </div>
            <div className="admin-panel">
                <div className="complaints">
                    <h3>Reklamacje klientów</h3>
                    <ul>
                        {complaints.map((complaint) => (
                            <li key={complaint.id}>
                                <strong>{complaint.user}:</strong> {complaint.comment}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Admin;
