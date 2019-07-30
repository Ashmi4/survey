import React from 'react';
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";
const About = () => (
    
    <div class="container-fluid">
        <Navbar/>
        
<section class="my-5">

   
  <div class="row">

    
    <div class="col-lg-5 col-xl-4">

      
      <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
        <img class="img-fluid" src="https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Survey-Template.png" alt="Sample image"/>
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    </div>
    
    <div class="col-lg-7 col-xl-8">

      
      <h3 class="font-weight-bold mb-3"><strong>Survey App</strong></h3>
    
      <p class="dark-grey-text">SurveyApp ask people questions from the types of apps they use most, to how frequently they use smartphone or tablet apps.SurveyApp helps to know people’s habits when it comes to smartphone apps.With this app company or organization can find out how
       many apps people download each month, what kind of apps they use most, and how many of their apps are free.</p>
        <p class="dark-grey-text">This will be useful to know more about what people demands from their apps,
         so company or organization can create an app to fill a nice or target your advertisements accordingly.</p>
        
      
    
    
      <a class="btn btn-primary btn-md" href="\surveypage">For Survey</a>

    </div>
    

  </div>
  

  <hr class="my-5"/>

  
    

 

</section>
 <Footer/>
    </div>

);

export default About;