import React from "react";
import { Eye } from "lucide-react";

const EquipmentDashboard = () => {
  
  const approvedEquipments = [
    { srNumber: "EQIP-00001", date: "9/3/2025", customer: "Arastu Dixit", status: "APPROVED" },
    { srNumber: "EQIP-00002", date: "9/8/2025", customer: "Ayush", status: "APPROVED" },
    { srNumber: "EQIP-00002", date: "9/8/2025", customer: "Shubham carpenter", status: "APPROVED" },
    { srNumber: "EQIP-00002", date: "9/9/2025", customer: "Shubham carpenter", status: "APPROVED" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
    
      <div className="w-64 bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-red-600 mb-6">GAS WALE</h1>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">📦 Orders</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">💳 Credit</li>
          <li className="flex items-center space-x-2 text-green-600 font-semibold">⚙ Equipment Master</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">🛒 Purchase</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">🔄 Defective Return</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">📄 Quotation</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">📝 Purchase Order</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">💵 Payment Refund</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">📋 DP List</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">🚚 Driver</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">🚗 Vehicle</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">🏦 Banks</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600">🛠 Support</li>
        </ul>
      </div>

      
      <div className="flex-1 p-6">
      
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Equipment Master Dashboard</h2>
          <button className="bg-red-500 text-white px-4 py-1 rounded">Log Out</button>
        </div>

    
        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 rounded bg-gray-200">All Equipment</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white">Approved</button>
          <button className="px-4 py-2 rounded bg-gray-200">Rejected</button>
        </div>

      
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Approved Equipment</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">SR NUMBER</th>
                <th className="border p-2 text-left">DATE</th>
                <th className="border p-2 text-left">CUSTOMER NAME</th>
                <th className="border p-2 text-left">STATUS</th>
                <th className="border p-2 text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {approvedEquipments.map((eq, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2">{eq.srNumber}</td>
                  <td className="border p-2">{eq.date}</td>
                  <td className="border p-2">{eq.customer}</td>
                  <td className="border p-2">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-semibold">
                      {eq.status}
                    </span>
                  </td>
                  <td className="border p-2 text-center">
                    <button className="bg-blue-500 text-white p-2 rounded">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>Showing 1 to 5 of 5 entries</span>
            <div className="space-x-2">
              <button className="px-3 py-1 border rounded text-gray-500">Previous</button>
              <button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button>
              <button className="px-3 py-1 border rounded text-gray-500">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDashboard;
