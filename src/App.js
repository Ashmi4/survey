import React from 'react';
import { Router } from "@reach/router";
import Index from "./pages/index";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Contactus from "./pages/contactus";
import Surveypage from "./pages/surveypage";


function App() {
  return (
   <Router> 
     <Index path="/"/>
     <About path="/about"/>
     <Login path="/login"/>
     <Register path="/register"/>
     <Contactus path="/contactus"/>
     <Surveypage path="/surveypage"/>
     


     </Router>
  );
}

export default App;
