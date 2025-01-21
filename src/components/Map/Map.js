import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = () => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const generateRandomCoordinates = () => {
            const lat = 54.3520 + (Math.random() - 0.5) * 0.1;
            const lng = 18.6466 + (Math.random() - 0.5) * 0.1;
            return [lat, lng];
        };

        const generateRandomMarkers = () => {
            const numberOfMarkers = Math.floor(Math.random() * 10) + 1;
            const generatedMarkers = [];

            for (let i = 0; i < numberOfMarkers; i++) {
                const position = generateRandomCoordinates();
                generatedMarkers.push(position);
            }

            setMarkers(generatedMarkers);
        };

        generateRandomMarkers();
    }, []);
    const customIcon = new L.Icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        shadowSize: [41, 41],
    });

    return (
        <div className="map-container">
            <MapContainer center={[54.3590, 18.6466]} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((position, index) => (
                    <Marker key={index} position={position} icon={customIcon}>
                        <Popup>
                            Tutaj znajduje się dostępny pojazd
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
