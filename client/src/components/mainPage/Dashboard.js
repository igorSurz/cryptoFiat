import React, {useState, useEffect} from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';
import axios from 'axios'
// import {Loader} from "../loader/Loader"
import './dash.css'



export default function Dashboard() {
 const [data, setData] = useState(0)


 useEffect(() => {
  axios.get('/api/chart')  // get request to api
 .then((response) => {     //promise
      const data = JSON.parse(response.data)    // convert to object chosen data
      const mapedResponse = data.values.map(element => { //every object in response array
      const chosenDate = new Date(element.x*1000) // create Date object, api returns not enough digits, adding more 000
      const isoDate = chosenDate.toISOString() //to string date method
      const resDate = isoDate.substr(0, 7) //cutting off the day
        element.x = resDate    //every x item of the object
      const {x: name, y: price} = {...element}    //changing the keys to represent data to the chart lyb
      const result = Object.assign({}, {name, price})//returning new object 
      return result     
     })

      setData(mapedResponse)
   })
 
}, []);



  
return (
     <div className="main">
      
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="price" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
  </div>
  );
   
}
