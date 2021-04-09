import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import {BrowserRouter, Route} from 'react-router-dom'
import ChartPage from './components/chart/chart'
import MainPage from './components/mainPage/mainPage'
import Signin from './components/user/userMain'

export default class App extends React.Component {
 
 render() {
  return (
    <BrowserRouter>
    <div>
      <Signin/>
      <Sidebar/>
      <Route path='/' component={MainPage} exact/>    
      <Route path='/chart' component={ChartPage} exact/>    
    </div>
    </BrowserRouter>
  );
}
}






