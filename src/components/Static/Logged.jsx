import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PreferencesForm from "../Form/PreferencesForm";
import VehicleRecommendation from "../Recommendation/VehicleRecommendation";
import MapComponent from "../Map/Map";
import HistoryPanel from "../Panel/HistoryPanel";
import CommunicationForm from "../Panel/CommunicationForm";
import Login from "../Form/Login";
import About from "./About";
import Services from "./Services";
import Privacy from "./Privacy";
import Error from "./Error";
import HeaderLog from './HeaderLog';
import ChatComponent from './ChatComponent';

const Logged = () => {
    const [preferences, setPreferences] = useState(null);

    const vehicles = [
        { id: 1, name: 'Autobus Miejski', type: 'bus', seats: 50, fuel: 'Diesel' },
        { id: 2, name: 'Autobus Turystyczny', type: 'bus', seats: 45, fuel: 'Diesel' },
        { id: 3, name: 'Bus Przewozowy', type: 'van', seats: 20, fuel: 'Benzyna' },
        { id: 4, name: 'Bus Ekologiczny', type: 'van', seats: 18, fuel: 'Elektryczny' },
    ];

    const handlePreferencesSubmit = (userPreferences) => {
        setPreferences(userPreferences);
    };

    return (
        <div className="app-container">
            <HeaderLog />

            <div className="content">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <h1>Witaj w RideNow</h1>
                                <PreferencesForm onSubmit={handlePreferencesSubmit} />
                                {preferences && (
                                    <>
                                        <VehicleRecommendation preferences={preferences} vehicles={vehicles} />
                                        <MapComponent />
                                        <HistoryPanel />
                                    </>
                                )}
                            </>
                        }
                    />
                    <Route path="/help" element={<CommunicationForm />} />
                    <Route path="/map" element={<MapComponent />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>

            <ChatComponent />
        </div>
    );
};

export default Logged;
