import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/assets/bg-hero.jpg')" }}
        className="bg-cover bg-center text-white p-20 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore the World with FlyGlobe</h1>
        <p className="text-xl mb-8">Book your dream destinations at the best prices</p>
        <Link to="/search" className="bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700">
          Search Flights
        </Link>
      </section>

      {/* Tour Packages */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Top Tour Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src={`/assets/package${n}.jpg`}
                alt={`Package ${n}`}
                className="rounded-t-lg w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Package {n}</h3>
                <p>Explore amazing places with all-inclusive travel and hotel stay.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Travelers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
              <div className="flex items-center mb-4">
                <img
                  src={`/assets/user${n}.jpg`}
                  alt={`User ${n}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">User {n}</h4>
                  <p className="text-sm text-gray-500">Verified Traveler</p>
                </div>
              </div>
              <p className="text-gray-700">
                "FlyGlobe made my vacation planning so smooth and budget-friendly. I loved every bit of it!"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { city: "Tokyo", image: "/assets/tokyo.jpg" },
            { city: "Paris", image: "/assets/paris.jpg" },
            { city: "New York", image: "/assets/newyork.jpg" },
            { city: "Dubai", image: "/assets/dubai.jpg" }
          ].map(({ city, image }) => (
            <div
              key={city}
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="h-64 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold transition transform hover:scale-105"
            >
              {city}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions or need help with your booking? We’re here for you.
          </p>
          <form className="grid md:grid-cols-2 gap-4 text-left">
            <input type="text" placeholder="Your Name" className="border p-3 rounded" />
            <input type="email" placeholder="Your Email" className="border p-3 rounded" />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border p-3 rounded md:col-span-2"
            ></textarea>
            <button className="bg-blue-600 text-white py-2 rounded md:col-span-2 hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} FlyGlobe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
