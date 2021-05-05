
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./srcBlack/layouts/Admin/Admin.js";
// import RTLLayout from "./srcBlack/layouts/RTL/RTL.js";

import "./srcBlack/assets/css/black-dashboard-react.css";
import "./srcBlack/assets/demo/demo.css";
import "./srcBlack/assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./srcBlack/components/ThemeWrapper/ThemeWrapper"; 
import BackgroundColorWrapper from "./srcBlack/components/BackgroundColorWrapper/BackgroundColorWrapper";

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          {/* <Route path="/rtl" render={(props) => <RTLLayout {...props} />} /> */}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter> 
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
