import React from "react";
import { useNavigate } from "react-router-dom";

const Itinerary = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Itinerary Details</h2>

      {/* Outbound Flight */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Outbound Flight</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-semibold">From:</p>
            <p>Delhi (DEL)</p>
            <p className="text-sm text-gray-600">Indira Gandhi Intl</p>
            <p className="mt-2">Date: 23 March 2025</p>
            <p>Time: 14:00</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Duration:</p>
            <p>15h 30m</p>
            <p>Stop: 2 (via YYZ)</p>
            <p className="text-sm text-gray-600 mt-2">Flight: AI 191</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">To:</p>
            <p>London (LHR)</p>
            <p className="text-sm text-gray-600">Heathrow Airport</p>
            <p className="mt-2">Date: 23 March 2025</p>
            <p>Time: 14:00</p>
          </div>
        </div>
      </div>

      {/* Return Flight */}
      <div className="bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Return Flight</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-semibold">From:</p>
            <p>London (LHR)</p>
            <p className="text-sm text-gray-600">Heathrow Airport</p>
            <p className="mt-2">Date: 30 March 2025</p>
            <p>Time: 16:00</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Duration:</p>
            <p>14h 15m</p>
            <p>Stop: 1 (via DXB)</p>
            <p className="text-sm text-gray-600 mt-2">Flight: AI 192</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">To:</p>
            <p>Delhi (DEL)</p>
            <p className="text-sm text-gray-600">Indira Gandhi Intl</p>
            <p className="mt-2">Date: 31 March 2025</p>
            <p>Time: 08:15</p>
          </div>
        </div>
      </div>

      {/* Confirm button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/success")}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Confirm & Book
        </button>
      </div>
    </div>
  );
};

export default Itinerary;
