import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(stored.reverse());
  }, []);

  if (bookings.length === 0) {
    return (
      <div className="p-8 text-center text-gray-600">
        You have no bookings yet.
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>
      <div className="space-y-6">
        {bookings.map((b, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-6">
            <p className="text-sm text-gray-400 mb-2">
              Booked on: {new Date(b.date).toLocaleString()}
            </p>
            <h2 className="text-xl font-semibold mb-1">
              {b.flight?.airline} - {b.flight?.flightNo || "Flight Info"}
            </h2>
            <p>
              {b.flight?.from} → {b.flight?.to} on {b.flight?.date}
            </p>
            <p>Departure: {b.flight?.departure}, Arrival: {b.flight?.arrival}</p>
            <p>Passenger: {b.passenger.name} ({b.passenger.age}) - {b.passenger.email}</p>
            <p className="font-medium text-blue-600 mt-1">Paid: {b.flight?.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
