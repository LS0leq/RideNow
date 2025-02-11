import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Static/Header';
import HeaderLog from './components/Static/HeaderLog';
import Admin from './components/Static/Admin';
import Footer from './components/Static/Footer';
import About from './components/Static/About';
import Services from './components/Static/Services';
import Privacy from './components/Static/Privacy';
import Error from './components/Static/Error';
import PreferencesForm from './components/Form/PreferencesForm';
import Login from './components/Form/Login';
import CommunicationForm from './components/Panel/CommunicationForm';
import HistoryPanel from './components/Panel/HistoryPanel';
import VehicleRecommendation from './components/Recommendation/VehicleRecommendation';
import MapComponent from './components/Map/Map';
import Logged from './components/Static/Logged'; // Importuj komponent do wyświetlania strony po zalogowaniu
import './styles/App.css';

const App = () => {
    const [preferences, setPreferences] = useState(null);

    // Lista pojazdów
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
        <Router>
            <div className="app-container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <div className="content">
                                    <h1>Witaj w RideNow</h1>
                                    <PreferencesForm onSubmit={handlePreferencesSubmit} />
                                    {preferences && (
                                        <>
                                            <VehicleRecommendation preferences={preferences} vehicles={vehicles} />
                                            <MapComponent />
                                            <HistoryPanel />
                                        </>
                                    )}
                                </div>
                            </>
                        }
                    />
                    <Route path="/help" element={<><Header /><CommunicationForm /></>} />
                    <Route path="/admin" element={<><Header /><Admin /></>} />
                    <Route path="/map" element={<><Header /><MapComponent /></>} />
                    <Route path="/map/:username" element={<><HeaderLog /><MapComponent /></>} />
                    <Route path="/login" element={<><Header /><Login /></>} />
                    <Route path="/about" element={<><Header /><About /></>} />
                    <Route path="/services" element={<><Header /><Services /></>} />
                    <Route path="/privacy" element={<><Header /><Privacy /></>} />
                    <Route path="/logged/:username" element={<Logged />} />
                    <Route path="*" element={<><Header /><Error /></>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
