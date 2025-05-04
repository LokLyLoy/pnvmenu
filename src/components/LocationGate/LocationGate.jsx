'use client';
import React, { useEffect, useState } from 'react';

const ALLOWED_LOCATION = {
    lat: 11.529928, // Latitude of 88 Veng Sreng Blvd
    lng: 104.866672, // Longitude of 88 Veng Sreng Blvd
    radius: 200, // Radius in meters — adjust as needed
};

function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Earth radius in meters
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export default function LocationGate({ children }) {
    const [isAllowed, setIsAllowed] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const distance = getDistanceFromLatLonInMeters(
                        latitude,
                        longitude,
                        ALLOWED_LOCATION.lat,
                        ALLOWED_LOCATION.lng
                    );
                    setIsAllowed(distance <= ALLOWED_LOCATION.radius);
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    setIsAllowed(false);
                }
            );
        } else {
            setIsAllowed(false);
        }
    }, []);

    if (isAllowed === null) return <p>Checking your location...</p>;
    if (!isAllowed) return <p>Access denied. You are not at the required location.</p>;

    return <>{children}</>;
}
