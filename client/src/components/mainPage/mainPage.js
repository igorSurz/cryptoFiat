import './mainPage.css'
require('dotenv').config()


function MainPage() {
 return(
     <>
     <h1 className="h1">Buy and sell </h1>
     <div>My Var: {process.env.REACT_APP_URL}</div>;
     </>
 ) 
}
  
export default MainPage;