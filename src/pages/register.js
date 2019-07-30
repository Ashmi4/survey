import React from 'react';
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";

var firstName
var lastName
var email
var password
var phoneNumber

function getFirstName(ele)
{
firstName = ele.target.value;
}
function getLastName(ele)
{
lastName = ele.target.value;
}
function getEmail(ele)
{
email = ele.target.value;
}
function getPassword(ele)
{
password = ele.target.value;
}
function getPhoneNumber(ele)
{
    phoneNumber = ele.target.value;

}
function btnClicked()
{
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)
    console.log(phoneNumber)

    console.log("Button clicked")
}
const Register = () => (
    
    <div class="container-fluid">
        <Navbar/>
      
<form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Sign up</p>

    <div class="form-row mb-4">
        <div class="col">
            
            <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name" onChange={getFirstName.bind(this)}/>
        </div>
        <div class="col">
        
            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" onChange={getLastName.bind(this)}/>
        </div>
    </div>

    
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" onChange={getEmail.bind(this)}/>

   
    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={getPassword.bind(this)}/>
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" onChange={getPhoneNumber.bind(this)}/>
    <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
        Optional - for two step authentication
    </small>   

  
    <button class="btn btn-info my-4 btn-block" type="submit" onClick={btnClicked.bind(this)}>Sign up</button>
    <hr></hr>

    
    <p>By clicking
        <em> Sign up</em>  you agree to our
        <a href="" target="_blank"> terms of service</a>
</p>
</form>

<Footer/>
    </div>

);

export default Register;