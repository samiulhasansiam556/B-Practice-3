import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavIn() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authtoken');
        localStorage.removeItem('authuser');
        navigate('/signin');
    };

    const handleProfileClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChangePassword = () => {
        navigate('/home/changepassword');
    };

    const authUser = JSON.parse(localStorage.getItem('authuser')) || {};

    return (
        <div className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between px-28 items-center">
                {/* Title */}
                <div className="text-white text-2xl font-bold">
                    MyApp
                </div>

                {/* Buttons */}
                <div className="space-x-5 flex items-center">
                    <button
                        onClick={handleProfileClick} 
                        className="text-white text-xl focus:outline-none text-yellow-700 bg-white px-2 py-1 rounded-xl"
                    >
                        <i className="fas fa-user-circle"></i>
                    </button>
                    <button 
                        onClick={handleLogout} 
                        className="bg-white text-black-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-xl font-semibold mb-4">Profile</h3>
                        <div className="flex items-center mb-4">
                            <i className="fas fa-user-circle text-4xl mr-4"></i>
                            <div>
                                <p className="text-lg font-bold">{authUser.name}</p>
                                <p className="text-gray-600">{authUser.email}</p>
                            </div>
                        </div>
                        <button 
                            onClick={handleChangePassword}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                        >
                            Change Password
                        </button>
                        <button 
                            onClick={handleCloseModal} 
                            className="mt-4 text-gray-600 w-full text-left"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavIn;
