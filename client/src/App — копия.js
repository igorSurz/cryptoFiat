import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import {Route} from 'react-router-dom'
import Dashboard from './components/mainPage/Dashboard'
import Signin from './components/user/Signin'
import Registration from './components/user/Registration'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/auth.context'
import {Loader} from './components/loader/Loader'
import Admin from './srcBlack/layouts/Admin/Admin'


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
      
      {/* <Sidebar/> */}
      <Admin/>
{/*       
      <Route path='/' component={Dashboard} exact/>    
      <Route path='/signin' component={Signin} exact/>  
      <Route path='/registration' component={Registration} exact/>   */}

    </div>
    </AuthContext.Provider>
  );

}

export default App






