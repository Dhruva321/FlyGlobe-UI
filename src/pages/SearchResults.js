import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const navigate = useNavigate();

  const allFlights = [
    {
      id: 1,
      airline: "Air India",
      logo: "/assets/airlines/air-india.png",
      from: "DEL",
      to: "LHR",
      departTime: "14:00",
      arriveTime: "14:00",
      duration: "15h 30m",
      stops: "2 stops (YYZ)",
      stopCount: 2,
      date: "2025-03-23",
      price: 90500,
    },
    {
      id: 2,
      airline: "British Airways",
      logo: "/assets/airlines/british-airways.png",
      from: "DEL",
      to: "LHR",
      departTime: "16:30",
      arriveTime: "18:45",
      duration: "13h 15m",
      stops: "1 stop (DXB)",
      stopCount: 1,
      date: "2025-03-23",
      price: 78000,
    },
    {
      id: 3,
      airline: "Vistara",
      logo: "/assets/airlines/vistara.png",
      from: "DEL",
      to: "LHR",
      departTime: "22:10",
      arriveTime: "08:15",
      duration: "10h 5m",
      stops: "Non-stop",
      stopCount: 0,
      date: "2025-03-23",
      price: 85250,
    },
    {
      id: 4,
      airline: "Emirates",
      logo: "/assets/airlines/emirates.png",
      from: "DEL",
      to: "LHR",
      departTime: "11:50",
      arriveTime: "19:30",
      duration: "14h 10m",
      stops: "1 stop (DXB)",
      stopCount: 1,
      date: "2025-03-24",
      price: 82900,
    },
    {
      id: 5,
      airline: "Lufthansa",
      logo: "/assets/airlines/lufthansa.png",
      from: "DEL",
      to: "LHR",
      departTime: "01:25",
      arriveTime: "12:05",
      duration: "12h 40m",
      stops: "1 stop (FRA)",
      stopCount: 1,
      date: "2025-03-24",
      price: 88300,
    },
  ];

  const [sortOrder, setSortOrder] = useState("");
  const [filterStops, setFilterStops] = useState("all");
  const [filterAirline, setFilterAirline] = useState("all");
  const [filterDate, setFilterDate] = useState("");

  const filteredFlights = allFlights
    .filter((flight) => {
      const matchStops =
        filterStops === "all" ||
        (filterStops === "0" && flight.stopCount === 0) ||
        (filterStops === "1" && flight.stopCount === 1) ||
        (filterStops === "2" && flight.stopCount >= 2);

      const matchAirline = filterAirline === "all" || flight.airline === filterAirline;

      const matchDate = !filterDate || flight.date === filterDate;

      return matchStops && matchAirline && matchDate;
    })
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  const uniqueAirlines = [...new Set(allFlights.map((f) => f.airline))];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Search Results: Flights from Delhi to London</h2>

      {/* Filters and Sort */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div>
          <label className="mr-2 font-medium">Sort by Price:</label>
          <select
            className="border p-2 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Select</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Filter by Stops:</label>
          <select
            className="border p-2 rounded"
            value={filterStops}
            onChange={(e) => setFilterStops(e.target.value)}
          >
            <option value="all">All</option>
            <option value="0">Non-stop</option>
            <option value="1">1 Stop</option>
            <option value="2">2+ Stops</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Filter by Airline:</label>
          <select
            className="border p-2 rounded"
            value={filterAirline}
            onChange={(e) => setFilterAirline(e.target.value)}
          >
            <option value="all">All</option>
            {uniqueAirlines.map((airline) => (
              <option key={airline} value={airline}>
                {airline}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Filter by Date:</label>
          <input
            type="date"
            className="border p-2 rounded"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
      </div>

      {/* Flight Cards */}
      <div className="grid gap-6">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <div key={flight.id} className="bg-white p-4 shadow rounded border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={flight.logo} alt={flight.airline} className="w-10 h-10 object-contain" />
                  <div>
                    <h3 className="text-lg font-semibold">{flight.airline}</h3>
                    <p className="text-sm text-gray-600">{flight.date}</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">{flight.departTime} - {flight.arriveTime}</p>
                  <p className="text-sm text-gray-600">{flight.duration}</p>
                  <p className="text-sm text-gray-500">{flight.stops}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-700">₹{flight.price.toLocaleString()}</p>
                  <button
                    onClick={() => navigate("/review")}
                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">No flights match your filter criteria.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
