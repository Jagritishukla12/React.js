import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Properties from "./pages/Properties";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Support from "./pages/Support";
import Report from "./pages/Report";
import Settings from "./pages/Settings";
import Booking from "./pages/Booking";
import Report from "./pages/"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        
        <div className="w-64 bg-slate-900 text-white p-6">
          <h1 className="text-2xl font-bold text-center mb-8">
            <span className="text-yellow-500"> </span>
          </h1>

          <ul className="flex flex-col gap-5 text-lg">
            <li>
              <Link to ="/Home" className="hover:text-yellow-400">
              Home
              </Link>
            </li>
            <li>
              <Link to ="/about" className="hover:text-yellow-400">
              About
              </Link>
            </li>
            <li>
              <Link to ="contact" className="hover:text-yellow-400">
              Contact
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-yellow-400">
                Dashboard
              </Link>
            </li>
            <li></li>
            <li>
              <Link to="/user" className="hover:text-yellow-400">
                User
              </Link>
            </li>
           
            <li>
              <Link to="/properties" className="hover:text-yellow-400">
                Properties
              </Link>
            </li>
          
            <li>
              <Link to="/booking" className="hover:text-yellow-400">
                Bookings
              </Link>
            </li>
            <li>
              <Link to="/payment" className="hover:text-yellow-400">
                Payments
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-yellow-400">
                Support
              </Link>
            </li>
            <li>
              <Link to="/report" className="hover:text-yellow-400">
                Report
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-yellow-400">
                Settings
              </Link>
            </li>
            <li>
              <Link to ="/Owner" className="hover:text-yellow-400">
              Owner
              </Link>
            </li>
        
      
          </ul>
        </div>

        
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/support" element={<Support />} />
            <Route path="/report" element={<Report />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
