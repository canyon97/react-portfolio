import React, { useState } from "react";

const Toast = ({ message, type, onClose }) => {
    const typeStyles = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-black",
        info: "bg-blue-500 text-white",
    };

    return (
        <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg transition-opacity duration-300 ${
                typeStyles[type] || "bg-gray-500 text-white"
            }`}
        >
            <div className="flex items-center justify-between">
                <span>{message}</span>
                <button
                    onClick={onClose}
                    className="ml-4 text-lg font-bold focus:outline-none"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Toast;