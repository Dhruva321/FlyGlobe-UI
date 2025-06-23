import React from "react";
import { useNavigate } from "react-router-dom";

const TripReview = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Please review your offer</h2>

      {/* Flight Details */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Delhi To London</h3>
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

      {/* Fare Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold mb-2">Fare Summary</h4>
          <ul className="text-sm space-y-1">
            <li>Passenger 1, Adult</li>
            <li>Price: ₹38,660</li>
            <li>Flexible Ticket: ₹18,660</li>
            <li className="text-red-500">Taxes & Fees: ₹10,660</li>
            <li className="font-bold mt-2">Total: ₹90,500</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold mb-2">Offer & Discount</h4>
          <div className="flex space-x-2">
            <input type="text" placeholder="Coupon Code" className="border p-1 rounded w-full" />
            <button className="bg-blue-600 text-white px-3 py-1 rounded">Apply</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold mb-2 text-red-600">Cancellation & Charges</h4>
          <p className="text-sm">
            Non-refundable. Charges apply based on how close you are to the departure date.
            <br />
            <a href="#" className="text-blue-600 underline">View Details</a>
          </p>
        </div>
      </div>

      {/* Passenger Info */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="font-semibold mb-3">Traveler Details</h3>
        <div className="text-sm bg-red-100 text-red-600 p-2 rounded mb-4">
          Please make sure you enter the Name as per your passport
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <input type="email" placeholder="Confirm Email" className="border p-2 rounded" />
          <input type="tel" placeholder="Mobile Number" className="border p-2 rounded md:col-span-2" />
        </form>
      </div>

      {/* Passenger Personal Info */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">Adult 1</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Title (Mr/Mrs)" className="border p-2 rounded" />
          <input type="text" placeholder="Full Name" className="border p-2 rounded" />
          <input type="text" placeholder="Nationality" className="border p-2 rounded" />
          <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />
          <input type="text" placeholder="Passport Number" className="border p-2 rounded" />
        </form>
      </div>

      {/* Button to proceed */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/itinerary")}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Continue to Itinerary
        </button>
      </div>
    </div>
  );
};

export default TripReview;
