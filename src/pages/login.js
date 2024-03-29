import React from 'react';
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";
const Login = () => (
    
    <div class="container-fluid">
        <Navbar/>
       
<form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Sign in</p>

    
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail"/>

   
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"/>

    <div class="d-flex justify-content-around">
        <div>
          
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
           
            <a href="">Forgot password?</a>
        </div>
    </div>

    
    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

    
    <p>Not a member?
        <a href="/register">Register</a>
    </p>

    
   

</form>

<Footer/>
    </div>



);

export default Login;