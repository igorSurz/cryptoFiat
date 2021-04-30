import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import {Route} from 'react-router-dom'
import ChartPage from './components/chart/chart'
import MainPage from './components/mainPage/mainPage'
import Signin from './components/user/Signin'
import Registration from './components/user/Registration'


export default class App extends React.Component {
 
 render() {
  return (
    
    <div className="App">
      
      <Sidebar/>
      
      <Route path='/' component={MainPage} exact/>    
      <Route path='/chart' component={ChartPage} exact/>    
      <Route path='/signin' component={Signin} exact/>  
      <Route path='/registration' component={Registration} exact/>   
    </div>
    
  );
}
}






