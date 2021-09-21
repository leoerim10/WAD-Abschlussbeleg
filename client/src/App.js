
import Home from "./components/Home";
import Admina_Page from "./components/Admina_Page";
import Normalo_Page from "./components/Normalo_Page";
import {Route, Switch } from "react-router";
import Header2 from "./components/Header";
import LoginForm2 from "./components/Loginform";
import { useState } from "react";



function App() {
  var authenticated = true

  return(


  <Switch>

 
    <Route exact path="/Admina_Page" component={
      Admina_Page
      } />

      {

        authenticated &&
      
       <Route exact path="/Normalo_Page" component={
            Normalo_Page
      } />

    }

    <Route path="/" component={Home}/>
    
  
</Switch>
)
}




export default App;
