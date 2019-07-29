import React from 'react';
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";
const Surveypage = () => (
    
    <div class="container-fluid">
        <Navbar/>
        
<section class="text-center my-5">

  
  <h2 class="h1-responsive font-weight-bold my-5">Recent Survey</h2>

  <p class="dark-grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum.</p>

  
  <div class="row">

  
    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">

      
      <div class="view overlay rounded z-depth-2 mb-4">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="Sample image"/>
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>


      <a href="#!" class="pink-text">
        <h6 class="font-weight-bold mb-3"><i class="fas fa-map pr-2"></i>Adventure</h6>
      </a>
    
      <h4 class="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
      
      <p>by <a class="font-weight-bold">Billy Forester</a>, 15/07/2018</p>
    
      <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
        quo minus id quod maxime placeat facere possimus.</p>
      
        <a class="btn btn-info btn-rounded btn-md">Click Survey</a>

    </div>
  
    <div class="col-lg-4 col-md-6 mb-md-0 mb-4">

      
      <div class="view overlay rounded z-depth-2 mb-4">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Sample image"/>
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    
      <a href="#!" class="deep-orange-text">
        <h6 class="font-weight-bold mb-3"><i class="fas fa-graduation-cap pr-2"></i>Education</h6>
      </a>
      
      <h4 class="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
      
      <p>by <a class="font-weight-bold">Billy Forester</a>, 13/07/2018</p>
      
      <p class="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        voluptatum deleniti atque corrupti quos dolores.</p>
      
        <a class="btn btn-info btn-rounded btn-md">Click Survey</a>

    </div>
  

    
    <div class="col-lg-4 col-md-6 mb-0">

      
      <div class="view overlay rounded z-depth-2 mb-4">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg" alt="Sample image"/>
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

      
      <a href="#!" class="blue-text">
        <h6 class="font-weight-bold mb-3"><i class="fas fa-fire pr-2"></i>Culture</h6>
      </a>
    
      <h4 class="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
      
      <p>by <a class="font-weight-bold">Billy Forester</a>, 11/07/2018</p>
      
      <p class="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
        quia consequuntur magni dolores eos qui ratione.</p>
      
      <a class="btn btn-info btn-rounded btn-md">Click Survey</a>

    </div>
    

  </div>
  

</section>
   
<Footer/>
    </div>

);

export default Surveypage;