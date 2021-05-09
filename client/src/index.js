
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, 
  // Redirect 
} from "react-router-dom";

import MainDash from "./layouts/MainDash/MainDash.js"
// import Footer from "./components/Footer/Footer"


import "./assets/css/black-dashboard-react.css";
import "./assets/css/main.css"
import "./assets/css/nucleo-icons.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props) => <MainDash {...props} />} />        
          {/* <Redirect from="/" to="/dashboard" /> */}
        

        </Switch>
      
      </BrowserRouter>
    </BackgroundColorWrapper>
   
  </ThemeContextWrapper>,
  document.getElementById("root")
);
