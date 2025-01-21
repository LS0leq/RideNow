import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Static/Header';
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
                <Header />
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
                    <Route
                        path="/help"
                        element={<CommunicationForm />}
                    />
                    <Route
                        path="/map"
                        element={<MapComponent />}
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                    /><Route
                    path="/about"
                    element={<About />}
                /><Route
                    path="/services"
                    element={<Services />}
                /><Route
                    path="/privacy"
                    element={<Privacy />}
                />
                    <Route path="*" element={<Error/>}/>
                </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
