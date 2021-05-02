import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import {Route} from 'react-router-dom'
import ChartPage from './components/chart/Chart'
import MainPage from './components/mainPage/MainPage'
import Signin from './components/user/Signin'
import Registration from './components/user/Registration'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/auth.context'
import {Loader} from './components/loader/Loader'


 function App() {
  
 const {token, login, logout, userId, ready, name, uemail} = useAuth()
 const isAuthenticated = !!token

 if (!ready) {
   return <Loader/>
 }
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated, name, uemail
    }}>
    <div className="App">
      
      <Sidebar/>
      
      <Route path='/' component={MainPage} exact/>    
      <Route path='/chart' component={ChartPage} exact/>    
      <Route path='/signin' component={Signin} exact/>  
      <Route path='/registration' component={Registration} exact/>   
    </div>
    </AuthContext.Provider>
  );

}

export default App






