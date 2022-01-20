import Dashboard from './views/Dashboard.js';
import Icons from './views/Icons.js';
import Notifications from './views/Notifications.js';
import Typography from './views/Typography.js';
import UserProfile from './views/UserProfile.js';
import Offers from './views/Offers.js';
import Registration from './views/Registration.js';

var routes = [
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
	},
	{
		path: '/user-profile',
		name: 'User Profile',
		icon: 'tim-icons icon-single-02',
		component: UserProfile
	},
	{
		path: '/typography',
		name: 'Typography',
		icon: 'tim-icons icon-align-center',
		component: Typography
	}
];
export default routes;
