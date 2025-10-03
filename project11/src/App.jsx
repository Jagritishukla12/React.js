import React from 'react'
import {LineChart,CartesianGrid,XAxis,YAxis,Line} from 'recharts'
// ...existing code...
const data = [
  { name: 'Jan', uv: 400, pv: 240 },
  { name: 'Feb', uv: 300, pv: 139 },
  { name: 'Mar', uv: 200, pv: 980 },
  { name: 'Apr', uv: 278, pv: 390 },
  { name: 'May', uv: 189, pv: 480 },
  { name: 'Jun', uv: 239, pv: 380 },
  { name: 'Jul', uv: 349, pv: 430 },
];
// ...existing code...
function App() {
  return (
    <div>
           <LineChart width={500} height={300} data={data}>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
    </div>
  )
}

export default App
