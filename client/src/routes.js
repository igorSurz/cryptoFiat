import Dashboard from './views/Dashboard.js';
import Icons from './views/Icons.js';
import Notifications from './views/Notifications.js';
import Offers from './views/Offers.js';
import Registration from './views/Registration.js';

let routes = [];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
	routes = [
		{
			path: '/dashboard',
			name: 'Dashboard',
			icon: 'tim-icons icon-chart-pie-36',
			component: Dashboard
		},

		{
			path: '/editprofile',
			name: 'Edit Profile',
			icon: 'tim-icons icon-single-02',
			component: Registration
		},
		{
			path: '/offers',
			name: 'Offers',
			icon: 'tim-icons icon-credit-card',
			component: Offers
		},
		{
			path: '/icons',
			name: 'Icons',
			icon: 'tim-icons icon-atom',
			component: Icons
		},
		{
			path: '/notifications',
			name: 'Notifications',
			icon: 'tim-icons icon-bell-55',
			component: Notifications
		}
	];
} else {
	routes = [
		{
			path: '/dashboard',
			name: 'Dashboard',
			icon: 'tim-icons icon-chart-pie-36',
			component: Dashboard
		},

		{
			path: '/registration',
			name: 'Registration',
			icon: 'tim-icons icon-user-run',
			component: Registration
		},
		{
			path: '/offers',
			name: 'Offers',
			icon: 'tim-icons icon-credit-card',
			component: Offers
		}
	];
}

export default routes;
