
import Dashboard from "./views/Dashboard.js";
import Icons from "./views/Icons.js";
import Notifications from "./views/Notifications.js";
import Typography from "./views/Typography.js";
import UserProfile from "./views/UserProfile.js";
import Offers from "./views/Offers.js"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/p",
  },
  {
    path: "/offers",
    name: "Offers",
    icon: "tim-icons icon-credit-card",
    component: Offers,
    layout: "/p",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/p",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/p",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/p",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/p",
  },
 
];
export default routes;
