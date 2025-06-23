import React from "react";

const BookingSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-50">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Booking Confirmed!</h2>
      <p className="text-lg text-gray-700 mb-2">Thank you for booking with FlyGlobe.</p>
      <p className="text-gray-600">Your itinerary has been sent to your email.</p>
    </div>
  );
};

export default BookingSuccess;
