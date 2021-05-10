
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import "./assets/css/main.css"
import "./assets/css/black-dashboard-react.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.render(

     <BrowserRouter>
    <App />
    </BrowserRouter>,
  
  document.getElementById("root")
);
