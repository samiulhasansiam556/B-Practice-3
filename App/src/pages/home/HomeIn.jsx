import React from 'react';
import NavIn from '../../components/nav/NavIn';

function HomeIn() {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavIn />

            <main className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Website</h2>
                    <p className="text-gray-600 text-lg mb-6">
                        We are glad to have you here! Explore our features and enjoy a seamless experience.
                    </p>
                    <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
                        <p className="text-xl font-semibold">Special Offer!</p>
                        <p>Get 20% off on your first purchase. Use code <span className="font-bold">WELCOME20</span></p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomeIn;
