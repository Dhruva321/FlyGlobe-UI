import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import TripReview from "./components/TripReview";
import Itinerary from "./components/Itinerary";
import BookingSuccess from "./pages/BookingSuccess";
import Checkout from "./pages/Checkout";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/review" element={<TripReview />} />
      <Route path="/itinerary" element={<Itinerary />} />
      <Route path="/success" element={<BookingSuccess />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
  );
}

export default App;
