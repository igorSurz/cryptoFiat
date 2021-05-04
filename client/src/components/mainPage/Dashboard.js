import React, {useState, useEffect} from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';
import axios from 'axios'
// import {Loader} from "../loader/Loader"
import './dash.css'



export default function Dashboard() {
 const [data, setData] = useState(0)


 useEffect(() => {
  axios.get('/api/chart')  
 .then((response) => {
   const data = JSON.parse(response.data)

  
  console.log(data.values)
  setData(data.values)
   // console.log(data.values[0].x); 
 })
}, []);

// const data = [
  
//     {name: '$', uv: 400},
//     {name: 'Page B', uv: 500},
//     {name: 'Page C', uv: 600},
//     {name: 'Page D', uv: 700},
//   ];

  
return (
     <div className="main">
      
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
  </div>
  );
   
}
