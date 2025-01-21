// src/components/Panel/HistoryPanel.js
import React from 'react';

const HistoryPanel = () => {
    const rentalHistory = [
        { vehicle: 'Bus', startDate: '2024-12-01', endDate: '2024-12-02', cost: 200 },
        { vehicle: 'Autobus', startDate: '2024-12-10', endDate: '2024-12-11', cost: 150 },
    ];

    return (
        <div className="history-container">
            <h3>Historia wynajmu</h3>
            <ul>
                {rentalHistory.map((rental, index) => (
                    <li key={index}>
                        {rental.vehicle} od {rental.startDate} do {rental.endDate}, koszt: {rental.cost} PLN
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryPanel;
