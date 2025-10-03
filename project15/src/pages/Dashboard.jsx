import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { User, Home, Building2, Ticket, Settings, CreditCard, FileText } from "lucide-react";

  

const data = [
  { month: "Jan", revenue: 200 },
  { month: "Feb", revenue: 150 },
  { month: "Mar", revenue: 180 },
  { month: "Apr", revenue: 120 },
  { month: "May", revenue: 260 },
  { month: "Jun", revenue: 300 },
  { month: "Jul", revenue: 190 },
  { month: "Aug", revenue: 280 },
  { month: "Sep", revenue: 350 },
  { month: "Oct", revenue: 290 },
  { month: "Nov", revenue: 310 },
  { month: "Dec", revenue: 270 },
];

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
    
    

      
      <div className="flex-1 p-6">
        
        <div className="flex justify-between items-center">
          <input
            type="search"
            placeholder="Search here..."
            className="p-2 w-80 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">Emma Kwan</span>
          </div>
        </div>

    <h2>Dashboard Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          <StatCard title="Total Users" value="3,754" change="+12% this month" color="text-green-500" />
          <StatCard title="Total Owner" value="342" change="+5% this month" color="text-green-500" />
          <StatCard title="Total Properties" value="1,354" change="+8% this month" color="text-green-500" />
          <StatCard title="Occupancy Rate" value="75%" change="-2% this month" color="text-red-500" />
          <StatCard title="Open Tickets" value="24" change="+4 new today" color="text-red-500" />
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        
          <div className="bg-yellow-100 p-4 rounded-2xl shadow-md col-span-2">
            <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#facc15" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          
          <div className="bg-yellow-100 p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ New owner verification <span className="text-sm text-gray-500">10 min ago</span></li>
              <li>🏠 New property added <span className="text-sm text-gray-500">30 min ago</span></li>
              <li>💳 User payment processed <span className="text-sm text-gray-500">50 min ago</span></li>
              <li>✅ New owner verification <span className="text-sm text-gray-500">45 min ago</span></li>
              <li>🎫 Support ticket resolved <span className="text-sm text-gray-500">1 min ago</span></li>
            

              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, color }) {
  return (
    <div className="bg-slate-800 text-white p-4 rounded-xl shadow-md">
      <p className="text-sm">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
      <span className={`text-xs ${color}`}>{change}</span>
    </div>
  );
}

export default Dashboard;
