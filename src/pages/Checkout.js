import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;

  const [passenger, setPassenger] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      const newBooking = { flight, passenger, date: new Date().toISOString() };
      const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
      localStorage.setItem("bookings", JSON.stringify([...existing, newBooking]));

      navigate("/booking-success", {
        state: {
          flight,
          passenger,
        },
      });
    }, 2000);
  };

  if (!flight) {
    return (
      <div className="p-8 text-center text-red-500 font-semibold">
        No flight selected. Please go back and choose a flight.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Flight Booking</h1>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-8">
        <h2 className="text-xl font-semibold mb-2">{flight.airline} - {flight.flightNo}</h2>
        <p>From: <strong>{flight.from}</strong> → To: <strong>{flight.to}</strong></p>
        <p>Departure: {flight.departure} | Arrival: {flight.arrival}</p>
        <p>Duration: {flight.duration} | Price: <strong>{flight.price}</strong></p>
        <p>Date: {flight.date}</p>
      </div>

      {!submitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              required
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      ) : (
        <div className="text-center text-green-600 text-xl font-bold mt-8">
          Booking in progress...
        </div>
      )}
    </div>
  );
};

export default Checkout;
