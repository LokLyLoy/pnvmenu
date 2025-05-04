'use client'
import React, { useEffect, useState } from 'react';
import { MapPin, Warning, Info } from '@phosphor-icons/react';

const ALLOWED_LOCATION = {
    lat: 11.532773546615621, // Latitude of 88 Veng Sreng Blvd
    lng: 104.87065911394852, // Longitude of 88 Veng Sreng Blvd
    radius: 250, // Radius in meters — adjust as needed
    address: '88 Veng Sreng Blvd, Phnom Penh, Cambodia'
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
    const [locationError, setLocationError] = useState(null);
    const [currentDistance, setCurrentDistance] = useState(null);

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

                    const isWithinRadius = distance <= ALLOWED_LOCATION.radius;
                    setIsAllowed(isWithinRadius);
                    setCurrentDistance(distance);
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    setIsAllowed(false);
                    setLocationError(error.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            );
        } else {
            setIsAllowed(false);
            setLocationError('Geolocation is not supported by this browser.');
        }
    }, []);

    // Loading State
    if (isAllowed === null) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center !p-4">
                <div className="bg-white shadow-lg rounded-lg !p-8 max-w-md w-full text-center">
                    <MapPin className="mx-auto !h-12 !w-12 text-blue-500 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 !mb-4">Checking Location</h2>
                    <p className="text-gray-600 !mb-4">Please ensure location services are enabled</p>
                    <div className="animate-pulse">
                        <div className="!h-2 bg-gray-300 !rounded !w-3/4 mx-auto !mb-2"></div>
                        <div className="!h-2 bg-gray-300 !rounded !w-1/2 mx-auto"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Access Denied State
    if (!isAllowed) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center !p-4">
                <div className="bg-white shadow-lg rounded-lg !p-8 max-w-md w-full">
                    <Warning className="mx-auto h-12 w-12 text-red-500 !mb-4 !text-center" weight="bold"/>
                    <h2 className="text-2xl font-bold text-gray-800 !mb-4 text-center">Access Denied</h2>

                    <div className="bg-red-50 border border-red-200 rounded-lg !p-4 !mb-4">
                        <p className="text-red-700 text-center">
                            You are not at the required location.
                        </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg !p-4 !mb-4">
                        <div className="flex items-center !mb-2">
                            <Info className="h-5 w-5 text-blue-500 !mr-2" />
                            <h3 className="font-semibold text-blue-800">Location Details</h3>
                        </div>
                        <p className="text-blue-700">
                            Allowed Location: {ALLOWED_LOCATION.address}
                        </p>
                        <p className="text-blue-700">
                            Radius: {ALLOWED_LOCATION.radius} meters
                        </p>
                        {currentDistance && (
                            <p className="text-blue-700">
                                Your Distance: {Math.round(currentDistance)} meters
                            </p>
                        )}
                    </div>

                    {locationError && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg !p-4">
                            <p className="text-yellow-700 text-center">
                                {locationError}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Allowed State
    return (
        <>{children}</>
    );
}